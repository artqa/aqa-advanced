describe('Home page tests', () => {
  it('Navigate to Home page', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('h1').should('have.text', 'Kitchen Sink');
    cy.get('p>a').eq(1).should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'docs.cypress')
  })
})