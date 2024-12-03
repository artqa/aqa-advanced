import { test, expect } from '@playwright/test';
import { LoginPage, RegistrationPage, RegistrationForm } from "../src/pageObjects";
import { faker } from '@faker-js/faker';

let loginPage;
let registrationPage;
let registrationForm;

const firstName = "Arthur";
const lastName = "Cake";
const email = "octopus@sea.com";
const password = "Crusader1!";
const randomEmail = faker.internet.email();

test.describe('Registration form validation', () => {
  test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page);
    registrationPage = new RegistrationPage(page);
    registrationForm = new RegistrationForm(page);
    await loginPage.navigateToPage();
  })

  test('Name field validation', async () => {
    await registrationPage.openRegistrationForm();
    expect(await registrationPage.locators.registrationTitle).toHaveText('Registration');

    // "Name" field - Empty field and border color red
    await registrationPage.locators.signupName.click();
    expect(await registrationPage.locators.signupName).toBeEmpty();
    await registrationPage.locators.registrationFormModal.click({ position: { x: 0, y: 0 } }, { force: true });
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveText('Name required');
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Name" field - Wrong data and border color red
    await registrationPage.locators.signupName.clear();
    await registrationPage.locators.signupName.fill('Артурчик');
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveText('Name is invalid');
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Name" field - Wrong length and border color red
    await registrationPage.locators.signupName.clear();
    await registrationPage.locators.signupName.fill('a');
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveText('Name has to be from 2 to 20 characters long');
    expect(await registrationPage.locators.registrationNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Name" field - valid entry
    const nameField = registrationPage.locators.signupName;
    const nameErrMsg = registrationPage.locators.registrationNameErrMsg;
    await nameField.clear();
    await nameField.fill(firstName);

    const value = await nameField.inputValue();
    const input = value.trim();

    expect(input).toMatch(/^[A-Za-z]*$/);
    expect(input.length).toBeGreaterThanOrEqual(2);
    expect(input.length).toBeLessThanOrEqual(20);

    await expect(nameErrMsg).toHaveCount(0);

  })

  test('Last Name field validation', async () => {
    await registrationPage.openRegistrationForm();
    expect(await registrationPage.locators.registrationTitle).toHaveText('Registration');

    // "Last Name" field - Empty field and border color red
    await registrationPage.locators.signupLastName.click();
    expect(await registrationPage.locators.signupLastName).toBeEmpty();
    await registrationPage.locators.registrationFormModal.click({ position: { x: 0, y: 0 } }, { force: true });
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveText('Last name required');
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');  

    // "Last Name" field - Wrong data and border color red
    await registrationPage.locators.signupLastName.clear();
    await registrationPage.locators.signupLastName.fill('Артурчик');
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveText('Last name is invalid');
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Last Name" field - Wrong length and border color red
    await registrationPage.locators.signupLastName.clear();
    await registrationPage.locators.signupLastName.fill('a');
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveText('Last name has to be from 2 to 20 characters long');
    expect(await registrationPage.locators.registrationLastNameErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Last Name" field - valid entry
    const lastNameField = registrationPage.locators.signupLastName;
    const lastNameErrMsg = registrationPage.locators.registrationLastNameErrMsg;
    await lastNameField.clear();
    await lastNameField.fill(lastName);

    const value = await lastNameField.inputValue();
    const input = value.trim();

    expect(input).toMatch(/^[A-Za-z]*$/);
    expect(input.length).toBeGreaterThanOrEqual(2);
    expect(input.length).toBeLessThanOrEqual(20);

    await expect(lastNameErrMsg).toHaveCount(0);
  })

  test('Email field validation', async () => {
    await registrationPage.openRegistrationForm();
    expect(await registrationPage.locators.registrationTitle).toHaveText('Registration');

    // "Email" field - Empty field and border color red
    await registrationPage.locators.signupEmail.click();
    expect(await registrationPage.locators.signupEmail).toBeEmpty();
    await registrationPage.locators.registrationFormModal.click({ position: { x: 0, y: 0 } }, { force: true });
    expect(await registrationPage.locators.registrationEmailErrMsg).toHaveText('Email required');
    expect(await registrationPage.locators.registrationEmailErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Email" field - Wrong length and border color red
    await registrationPage.locators.signupEmail.clear();
    await registrationPage.locators.signupEmail.fill('test');
    expect(await registrationPage.locators.registrationEmailErrMsg).toHaveText('Email is incorrect');
    expect(await registrationPage.locators.registrationEmailErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Email" field - valid entry
    const emailField = registrationPage.locators.signupEmail;
    const emailErrMsg = registrationPage.locators.registrationEmailErrMsg;
    await emailField.clear();
    await emailField.fill(email);

    const value = await emailField.inputValue();
    const input = value.trim();

    expect(input).toMatch(/^\S+@\S+\.\S+$/);
    expect(input.length).toBeGreaterThanOrEqual(2);
    expect(input.length).toBeLessThanOrEqual(20);

    await expect(emailErrMsg).toHaveCount(0);

  })

  test('Password fields validation', async () => {
    await registrationPage.openRegistrationForm();
    expect(await registrationPage.locators.registrationTitle).toHaveText('Registration');

    // "Password" field - Empty field and border color red
    await registrationPage.locators.signupPassword.click();
    expect(await registrationPage.locators.signupPassword).toBeEmpty();
    await registrationPage.locators.registrationFormModal.click({ position: { x: 0, y: 0 } }, { force: true });
    expect(await registrationPage.locators.registrationPwdErrMsg).toHaveText('Password required');
    expect(await registrationPage.locators.registrationPwdErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Password" field - Wrong length and border color red
    await registrationPage.locators.signupPassword.clear();
    await registrationPage.locators.signupPassword.fill('test');
    expect(await registrationPage.locators.registrationPwdErrMsg).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    expect(await registrationPage.locators.registrationPwdErrMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Password" field - valid entry
    const passwordField = registrationPage.locators.signupPassword;
    const passwordErrMsg = registrationPage.locators.registrationPwdErrMsg;
    await passwordField.clear();
    await passwordField.fill(password);

    const value = await passwordField.inputValue();
    const input = value.trim();

    expect(input).toMatch(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/);
    await expect(passwordErrMsg).toHaveCount(0);

    // "Re-enter password" field - Empty field and border color red
    await registrationPage.locators.signupRepeatPassword.click();
    expect(await registrationPage.locators.signupRepeatPassword).toBeEmpty();
    await registrationPage.locators.registrationFormModal.click({ position: { x: 0, y: 0 } }, { force: true });
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveText('Re-enter password required');
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Re-enter password" field - Wrong length and border color red
    await registrationPage.locators.signupRepeatPassword.clear();
    await registrationPage.locators.signupRepeatPassword.fill('test');
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Re-enter password" field - passwords do not match
    await registrationPage.locators.signupPassword.clear();
    await registrationPage.locators.signupPassword.fill(password);
    await registrationPage.locators.signupRepeatPassword.clear();
    await registrationPage.locators.signupRepeatPassword.fill(password + 'a');
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveText('Passwords do not match');
    expect(await registrationPage.locators.registrationRpwdMsg).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    // "Password" field - valid entry
    await registrationPage.locators.signupPassword.clear();
    await registrationPage.locators.signupPassword.fill(password);
    await registrationPage.locators.signupRepeatPassword.clear();
    await registrationPage.locators.signupRepeatPassword.fill(password);
    expect(await registrationPage.locators.registrationRpwdMsg).toBeHidden();

  })

  test('User Registration form', async () => {
    await registrationPage.openRegistrationForm();
    expect(await registrationPage.locators.registrationTitle).toHaveText('Registration');

    await registrationForm.fillInForm(firstName, lastName, randomEmail, password, password);

  })

  test('Login flow', async () => { 
    await loginPage.locators.signinBtn.click();
    await loginPage.executeLogin(email, password);
    await expect(loginPage.page).toHaveURL(/.*garage/);
  })

})