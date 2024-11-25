export default class Garage {

  get garageLink() {
    return cy.get('[routerlink=garage]');
  }
    
  get garageTitle() {
    return cy.get('.panel-page_heading > h1');
  }

  get garageHeader() {
    return cy.get('.header_nav > [routerlink="/panel/garage"]');
  }

  get msgNoCars() {
    return cy.get('.panel-empty_message');
  }

  get addCarBtnM() {
    return cy.get('.btn').contains('Add car');
  }

  get addCarPopup() {
    return cy.get('.modal-title');
  }
  
  get brandDrpdwn() {
    return cy.get('select#addCarBrand');
  }

  get modelDrpdwn() {
    return cy.get('#addCarModel');
  }

  get addCarMlg() {
    return cy.get('#addCarMileage');
  }

  get addBtnPopup() {
    return cy.get('.modal-footer .btn-primary');
  }
  
  get cancelBtnPopup() {
    return cy.get('.modal-footer .btn-secondary');
  }

  get createdCar() {
    return cy.get('.panel-page_cars .car-list');
  }

  get carEditButton() {
    return cy.get('button[class=car_edit]');
  }

  deleteCar(){
    cy.get('[routerlink=garage]').click()
    cy.get('.car_edit').each(($el) => {
      if(!$el.length) {
        cy.log('nothing to delete')
        return
      }
      cy.wrap($el).click()
      cy.get('button.btn-outline-danger').should('be.visible').click();
      cy.get('.btn-danger').should('be.visible').click();
    })
  }

  clickGarageHeader() {
    this.garageHeader.click()
  }

  clickAddCarButton(){
    this.addCarBtnM.click();
  }
  
  fillInCarForm(brand, model, mileage){
    this.brandDrpdwn.select(brand);
    this.modelDrpdwn.select(model);
    this.addCarMlg.type(mileage);
    this.addBtnPopup.click();
  }

  clickSubmitButton(){
    this.submitButton.click()
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}
