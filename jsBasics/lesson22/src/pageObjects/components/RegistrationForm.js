import BasePage from "../BasePage";

export default class RegistrationForm extends BasePage {

  locators = {
    signupName: this.page.locator('input[id=signupName]'),
    signupLastName: this.page.locator('input[id=signupLastName]'),
    signupEmail: this.page.locator('input[id=signupEmail]'),
    signupPassword: this.page.locator('input[id=signupPassword]'),
    signupRepeatPassword: this.page.locator('input[id=signupRepeatPassword]'),
    registerBtn: this.page.locator('.modal-footer > .btn')
  }

  async fillInForm(name, lastName, email, password, repeatPassword){
    await this.locators.signupName.fill(name);
    await this.locators.signupLastName.fill(lastName);
    await this.locators.signupEmail.fill(email);
    await this.locators.signupPassword.fill(password);
    await this.locators.signupRepeatPassword.fill(repeatPassword);
    await this.locators.registerBtn.click();
  }

}
