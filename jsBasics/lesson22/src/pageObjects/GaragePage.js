import BasePage from "./BasePage";

export default class Garage extends BasePage {
    constructor(page, context){
      super(page, context)
      this.url = '/'
    }

    locators = {
      garageLink: this.page.locator('[routerlink=garage]'),
      garageTitle: this.page.locator('.panel-page_heading > h1'),
      garageHeader: this.page.locator('.header_nav > [routerlink="/panel/garage"]'),
      msgNoCars: this.page.locator('.panel-empty_message'),
      addCarBtnM: this.page.getByRole('button', { name: 'Add car' }),
      addCarPopup: this.page.locator('.modal-title'),
      brandDrpdwn: this.page.locator('select#addCarBrand'),
      modelDrpdwn: this.page.locator('#addCarModel'),
      addCarMlg: this.page.locator('#addCarMileage'),
      addBtnPopup: this.page.locator('.modal-footer .btn-primary'),
      cancelBtnPopup: this.page.locator('.modal-footer .btn-secondary'),
      createdCar: this.page.locator('.panel-page_cars .car-list'),
      carEditButton: this.page.locator('button[class=car_edit]'),
    }

    async clickAddCarButton(){
      await  this.locators.addCarBtnM.click();
    }
      
    async fillInCarForm(brand, model, mileage){
        this.locators.brandDrpdwn.selectOption(brand);
        this.locators.modelDrpdwn.selectOption(model);
        this.locators.addCarMlg.fill(mileage);
        this.locators.addBtnPopup.click();
      }
    
    async clickSubmitButton(){
        this.locators.submitButton.click()
      }
    
    async clickLoginButton() {
        this.locators.loginButton.click();
      }

    async deleteAllCars() {
        await this.page.click('[routerlink=garage]');
        const carEditElements = await this.page.locator('.car_edit');
        const carCount = await carEditElements.count();
      
        if (carCount === 0) {
          console.log('nothing to delete');
          return;
        }
      
        for (let i = 0; i < carCount; i++) {
          const carEditElement = carEditElements.nth(i);
      
          await carEditElement.click();
      
          const deleteButton = await this.page.locator('button.btn-outline-danger');
          await deleteButton.waitFor({ state: 'visible' });
          await deleteButton.click();
      
          const confirmButton = await this.page.locator('.btn-danger');
          await confirmButton.waitFor({ state: 'visible' });
          await confirmButton.click();
        }
      }  
   
}