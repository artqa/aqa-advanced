import { GaragePage, ExpensesPage } from '../support/pageObjects';

const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe('Add car and expenses', () => {

  const userInfo = {
    emailA: "beetle@sky.com",
    passwordA: "Crusader2!",
    emailB: "octopus@sea.com",
    passwordB: "Crusader1!", 
  };

  const d = new Date();

  const carInfo = {
    brand: "BMW",
    model: "X5",
    mileage1: 2000,
    mileage2: 2500,
    date: (d.getDate()+1)  + "." + (d.getMonth()+1) + "." + d.getFullYear(),
    liters: 100,
    cost: 500
  };

  beforeEach(() => {
    cy.visit('/', { auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }});
    //cy.login(userInfo.emailA, userInfo.passwordA);
    cy.loginAlt(userInfo.emailA, userInfo.passwordA, userInfo.emailB, userInfo.passwordB);
  })

  it('add car and expenses', () => {
    garagePage.clickAddCarButton();
    garagePage.fillInCarForm(carInfo.brand, carInfo.model, carInfo.mileage1);
    cy.get('.panel-page_cars .car-list').should('be.visible');
    expensesPage.clickAddExpensesButton();
    expensesPage.fillInExpenceForm(carInfo.date, carInfo.mileage2, carInfo.liters, carInfo.cost);
    cy.get('.expenses_table-wrapper .expenses_table').should('be.visible');
    garagePage.clickGarageHeader();
    cy.get('.panel-page_heading > h1').should('be.visible');
  })

  after(()=> {
    garagePage.deleteCar();
  })
});