import BasePage from "../BasePage";

export default class LoginForm extends BasePage {

  locators = {
    emailInput: this.page.locator('[id=signinEmail]'),
    passwordInput: this.page.locator('[id=signinPassword]'),
    loginBtn: this.page.locator('.modal-footer > .btn-primary'),
  }

  async fillInLoginForm(email,password){
    await this.locators.emailInput.fill(email);
    await this.locators.passwordInput.fill(password);
  }
  
}