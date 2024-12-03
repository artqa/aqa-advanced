import BasePage from "./BasePage";

export default class Registration extends BasePage{
  constructor(page, context){
    super(page, context)
  }

  locators = {
    signupBtn: this.page.locator('.btn-primary'),
    registrationFormModal: this.page.locator('.modal-content'),
    signupName: this.page.locator('input[id=signupName]'),
    signupLastName: this.page.locator('input[id=signupLastName]'),
    signupEmail: this.page.locator('input[id=signupEmail]'),
    signupPassword: this.page.locator('input[id=signupPassword]'),
    signupRepeatPassword: this.page.locator('input[id=signupRepeatPassword]'),
    registrationTitle: this.page.locator('h4[class=modal-title]'),
    registrationNameErrMsg: this.page.locator('#signupName + .invalid-feedback>p'),
    registrationLastNameErrMsg: this.page.locator('#signupLastName + .invalid-feedback>p'),
    registrationEmailErrMsg: this.page.locator('#signupEmail + .invalid-feedback>p'),
    registrationPwdErrMsg: this.page.locator('#signupPassword + .invalid-feedback>p'),
    registrationRpwdMsg: this.page.locator('#signupRepeatPassword + .invalid-feedback>p'),
    registerBtn: this.page.locator('.modal-footer > .btn')
  }

  async openRegistrationForm(){
    await this.locators.signupBtn.click()
  }

}



