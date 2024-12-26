import { GaragePage, ExpensesPage } from '../support/pageObjects';

const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe.skip('Add car and expenses', () => {
  let carId;

  const d = new Date();

  const carInfo = {
    brand: "BMW",
    model: "X5",
    mileage1: 2000,
    mileage2: 2500,
    date: (d.getDate()+1) + "." + (d.getMonth()+1) + "." + d.getFullYear(),
    date1: d.getFullYear() + "." + (d.getMonth()+1) + "." + (d.getDate()+1),
    date2: d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear(),
    liters: 100,
    cost: 500
  };

  beforeEach(() => {
    cy.visit('', { auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }});
    cy.login(Cypress.env('email'), Cypress.env('password'));
  })

  it('intercept car id', () => {
   // garagePage.deleteCar();

    //car interception task
    cy.intercept('POST', '/api/cars').as('newCar');
    garagePage.clickAddCarButton();
    garagePage.fillInCarForm(carInfo.brand, carInfo.model, carInfo.mileage1);
   
    cy.wait('@newCar').then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(201);

      carId = interception.response.body.data?.id;
      console.log(carId);
    });

    //get list of cars
    cy.request({
      method: 'GET',
      url: '/api/cars',
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data[0].id).to.equal(carId);
      expect(response.body.data[0].brand).to.equal(carInfo.brand);
      expect(response.body.data[0].model).to.equal(carInfo.model);
   
       // create expense  
       cy.addExpense('/api/expenses', {
        carId: carId,
        reportedAt: carInfo.date1,
        mileage: carInfo.mileage2,
        liters: carInfo.liters,
        totalCost: carInfo.cost
        }).then((response) => {
    console.log(response)
    expect(response.status).to.equal(200);
    expect(response.body.data.mileage).to.equal(carInfo.mileage2);
    });  
   
    });

    //find created car
    expensesPage.fuelExpensesLink.click();
    expensesPage.expensesTitle.should('be.visible');
    
    cy.get('tr > td').should(($resp) => {
        expect($resp.text()).to.contain(carInfo.date);
        expect($resp.text()).to.contain(carInfo.mileage2);
        expect($resp.text()).to.contain(carInfo.liters);
        expect($resp.text()).to.contain(carInfo.cost);
      });
  })  

  after(() => {
    garagePage.deleteCar();
  })
});