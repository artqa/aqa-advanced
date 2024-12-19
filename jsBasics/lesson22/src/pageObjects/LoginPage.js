import BasePage from "./BasePage";
import LoginForm from "./components/LoginForm";

export default class Login extends BasePage {
    constructor(page, context){
      super(page, context)
      this.url = '/'
      this.loginForm = new LoginForm(page,context);
    }

    locators = {
      signinBtn: this.page.locator('button.header_signin'),
      loginTitle: this.page.locator('h4[class=modal-title]'),
      loginBtn: this.page.locator('.modal-footer > .btn-primary'),
      loginSuccessMsg: this.page.locator('.alert-success')
    }

    async executeLogin(email, password){
      await this.loginForm.fillInLoginForm(email, password)
      await this.locators.loginBtn.click();
    }  

    async clearCookies(){
      await this.context.clearCookies();
    }
   
}