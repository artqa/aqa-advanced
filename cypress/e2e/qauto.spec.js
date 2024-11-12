describe('QAUTO Home Page', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', { auth: {
      username: 'guest',
      password: 'welcome2qauto' 
    }});
  });

  it('Verify Header elements', () => {
    // Logo
    cy.get('[class=header_logo]').should('have.attr', 'href');
    // Home button
    cy.get('.btn').contains('Home').as('homeBtn');
    cy.get('@homeBtn').should('be.visible').and('have.length', 1);
    // About button
    cy.get('.btn').contains('About').as('aboutBtn');
    cy.get('@aboutBtn').invoke('text').should('deep.equal', 'About');
    //Contacts button
    cy.get('.btn').contains('Contacts').should('exist');
    // Guest login button
    cy.get('.-guest').contains('Guest').should('be.enabled');
    // Sign in button
    cy.get('.btn').contains('Sign In').should('be.visible');
    // Sign up button
    cy.get('.btn-primary').contains('Sign up').should('be.enabled');
  });

  it('Verify Footer elements', () => {
    cy.get('.socials_link > .icon-facebook').should('exist').and('be.visible');
    cy.get('.socials_link > .icon-telegram').should('be.visible');
    cy.get('.socials_link > .icon-youtube').should('be.visible');
    cy.get('.socials_link > .icon-instagram').should('be.visible');
    cy.get('.socials_link > .icon-linkedin').should('be.visible');
    cy.get ('.display-4').should('be.visible');
    cy.get('.h4').should('be.visible');
  });
});