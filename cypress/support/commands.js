// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})

Cypress.Commands.add('login', (email, password) => {
  cy.get('.btn').contains('Sign In').click();
  cy.get('h4[class=modal-title]').should('be.visible').and('contain', 'Log in');
  cy.get('[id=signinEmail]').type(email);
  cy.get('[id=signinPassword]').type(password, { sensitive: true });
  cy.get('.modal-footer > .btn-primary').should('be.enabled').click();
  cy.url().should('contain', '/panel/garage');
  cy.get('.alert-success').should('contain', 'You have been successfully logged in');
});

Cypress.Commands.add('loginAlt', (email1, password1, email2, password2) => {
  cy.url().then(($url) => {
    if($url.includes('qauto2')) {
      cy.login(email1, password1);
    } else
      cy.login(email2, password2);
  })
});