
import '/Users/artem/Desktop/Automation/project/aqa-advanced/cypress/support/commands.js'
import { faker } from '@faker-js/faker';

describe('Account registration flow', ()=> {

  const userInfo = {
    firstName: "Arthur",
    lastName: "Cake",
    email: "octopus@sea.com",
    password: "Crusader1!",
  };

  const randomEmail = faker.internet.email();

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', { auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }});
  });

  it('Name field validation', ()=> {
    cy.get('.btn-primary').contains('Sign up').click();
        
    // "Name" field - Empty field and border color red
    cy.get('[id=signupName]').as('name');
    cy.get('@name').click().should('be.empty');
    cy.get('.modal-content').click(0,0, {force: true});
    cy.get('#signupName + .invalid-feedback>p').as('nameErrMsg');
    cy.get('@nameErrMsg').should('contain', 'Name required')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Name" field - Wrong data and border color red
    cy.get('@name').clear().type('Артурчик');
    cy.get('@nameErrMsg').should('contain', 'Name is invalid')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Name" field - Wrong length and border color red
    cy.get('@name').clear().type('a');
    cy.get('@nameErrMsg').should('contain', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Name" field - valid entry
    cy.get('@name').clear().type(userInfo.firstName);
    cy.get('@name').invoke('val').then((value) => {
      const input = value.trim();
      cy.wrap(input).should('match', /^[A-Za-z]*$/);
      expect(input.length).to.be.gte(2);
      expect(input.length).to.be.lte(20);
      cy.get('@nameErrMsg').should('not.exist');
    });
  });

  it('Last Name field validation', () => {
    cy.get('.btn-primary').contains('Sign up').click();
    cy.get('[id=signupLastName]').as('lastName');
        
    // "Last Name" field - Empty field and border color red
    cy.get('@lastName').click().should('be.empty');
    cy.get('.modal-content').click(0,0, {force: true});
    cy.get('#signupLastName + .invalid-feedback>p').as('lastNameErrMsg');
    cy.get('@lastNameErrMsg').should('contain', 'Last name required')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Last Name" field - Wrong data and border color red
    cy.get('@lastName').clear().type('Артурчик');
    cy.get('@lastNameErrMsg').should('contain', 'Last name is invalid')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Last Name" field - Wrong length and border color red
    cy.get('@lastName').clear().type('a');
    cy.get('@lastNameErrMsg').should('contain', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Last Name" field - valid entry
    cy.get('@lastName').clear().type(userInfo.lastName);
    cy.get('@lastName').invoke('val').then((value) => {
      const input = value.trim();
      cy.wrap(input).should('match', /^[A-Za-z]*$/);
      expect(input.length).to.be.gte(2);
      expect(input.length).to.be.lte(20);
      cy.get('@lastNameErrMsg').should('not.exist');
    });
  });

  it('Email field validation', () => {
    cy.get('.btn-primary').contains('Sign up').click();
    cy.get('[id=signupEmail]').as('email');
        
    // "Email" field - Empty field and border color red
    cy.get('@email').click().should('be.empty');
    cy.get('.modal-content').click(0,0, {force: true});
    cy.get('#signupEmail + .invalid-feedback>p').as('emailErrMsg');
    cy.get('@emailErrMsg').should('contain', 'Email required')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Email" field - Wrong length and border color red
    cy.get('@email').clear().type('test');
    cy.get('@emailErrMsg').should('contain', 'Email is incorrect')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Email" field - valid entry
    cy.get('@email').clear().type(userInfo.email);
    cy.get('@email').invoke('val').then((value) => {
      const input = value.trim();
      cy.wrap(input).should('match', /^\S+@\S+\.\S+$/);
      cy.get('@emailErrMsg').should('not.exist');
    });
  });

  it('Password fields validation', () => {
    cy.get('.btn-primary').contains('Sign up').click();
    cy.get('[id=signupPassword]').as('password');
        
    // "Password" field - Empty field and border color red
    cy.get('@password').click().should('be.empty');
    cy.get('.modal-content').click(0,0, {force: true});
    cy.get('#signupPassword + .invalid-feedback>p').as('passErrMsg');
    cy.get('@passErrMsg').should('contain', 'Password required')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Password" field - Wrong length and border color red
    cy.get('@password').clear().type('test');
    cy.get('@passErrMsg').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Password" field - valid entry
    cy.get('@password').clear().type(userInfo.password);
    cy.get('@password').invoke('val').then((value) => {
      const input = value.trim();
      cy.wrap(input).should('match', /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/);
      cy.get('@passErrMsg').should('not.exist');
    });

    // Re-enter password field
    cy.get('[id=signupRepeatPassword]').as('rPassword');
        
    // "Re-enter password" field - Empty field and border color red
    cy.get('@rPassword').click().should('be.empty');
    cy.get('.modal-content').click(0,0, {force: true});
    cy.get('#signupRepeatPassword + .invalid-feedback>p').as('repPassErrMsg');
    cy.get('@repPassErrMsg').should('contain', 'Re-enter password required')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Re-enter password" field - Wrong length and border color red
    cy.get('@rPassword').clear().type('test');
    cy.get('@repPassErrMsg').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');

    // "Re-enter password" field - passwords do not match
    cy.get('@password').clear().type(userInfo.password, { sensitive: true });
    cy.get('@rPassword').clear().type(userInfo.password + 'a', { sensitive: true });
    cy.get('@repPassErrMsg').should('contain', 'Passwords do not match')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
        
    // "Password" field - valid entry
    cy.get('@rPassword').clear().type(userInfo.password, { sensitive: true });
    cy.get('@rPassword').clear().type(userInfo.password, { sensitive: true });
    cy.get('@repPassErrMsg').should('not.exist');
  });

  it('User Registration form', ()=> {
    cy.get('.btn-primary').contains('Sign up').click();

    // Button Register is disabled if invalid data enetered
    cy.get('h4[class=modal-title]').should('be.visible').and('contain', 'Registration');
    cy.get('.modal-footer > .btn').should('be.disabled');
    cy.get('[id=signupName]').should('be.empty').type(userInfo.firstName);
    cy.get('[id=signupLastName]').should('be.empty').type(userInfo.firstName);
    cy.get('[id=signupEmail]').should('be.empty').type(randomEmail);
    cy.get('[id=signupPassword]').should('be.empty').type(userInfo.firstName);
    cy.get('[id=signupRepeatPassword]').should('be.empty').type(userInfo.firstName);
    cy.get('.modal-footer > .btn').should('be.disabled');

    // Register new account
    cy.get('[id=signupName]').clear().type(userInfo.firstName);
    cy.get('[id=signupLastName]').clear().type(userInfo.lastName);
    cy.get('[id=signupEmail]').clear().type(randomEmail);
    cy.get('[id=signupPassword]').clear().type(userInfo.password, { sensitive:  true });
    cy.get('[id=signupRepeatPassword]').clear().type(userInfo.password, { sensitive:  true });
    cy.get('.modal-footer > .btn').should('be.enabled').click();
    cy.url().should('contain', '/panel/garage');
  });

  it('Login flow using custom command', () => {
    cy.login(userInfo.email, userInfo.password);
  });
});