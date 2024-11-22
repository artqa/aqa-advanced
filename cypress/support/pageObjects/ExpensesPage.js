export default class Expenses {

  get fuelExpensesLink() {
    return cy.get('[routerlink=expenses]');
  }
  
  get expensesTitle() {
    return cy.get('.panel-page_heading > h1');
  }

  get msgNoCars() {
    return cy.get('.panel-empty_message');
  }

  get addexpBtnM() {
    return cy.get('.btn').contains('Add an expense');
  }

  get addExpBtnPopup() {
    return cy.get('button.car_add-expense'); //button.car_add-expense
  }

  get addExpPopup() {
    return cy.get('[class=modal-content]');
  }

  get reportDate() {
    return cy.get('input[id=addExpenseDate]');
  }

  get addExpMlg() {
    return cy.get('#addExpenseMileage');
  }

  get addLiters() {
    return cy.get('[id=addExpenseLiters]');
  }

  get totalCost() {
    return cy.get('[id=addExpenseTotalCost]');
  }

  get addBtnPopup() {
    return cy.get('.modal-footer .btn-primary');
  }
  
  get cancelBtnPopup() {
    return cy.get('.modal-footer .btn-secondary');
  }

  get expenseDate() {
    return cy.get('[id=addExpenseDate]');
  }

  get expenseCreated() {
    return cy.get('.expenses_table-wrapper .expenses_table');
  }

  clickAddExpensesButton(){
    this.addExpBtnPopup.click();
  }

  fillInExpenceForm(date, mileage, liters, cost){
    this.reportDate.clear().type(date);
    this.addExpMlg.clear().type(mileage);
    this.addLiters.type(liters);
    this.totalCost.type(cost);
    this.addBtnPopup.click();
  }
}