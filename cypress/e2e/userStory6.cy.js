// ================= USER STORY 6 ====================
// They want access to educational materials such as tutorials, e-books, videos, or
// webinars that can help them learn about forex trading, market analysis, risk
// management, and trading strategies.
// ===================================================

describe('User Story 6 Test Cases', () => {
  const email = 'testingqaassignment@gmail.com';
  const pass = 'Testing1234';

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://primecodex.com/');
    cy.wait(5000);
  });

  it('User want to see some insights and strategies for stockprize', () => {
    // Click insight at navbar
    cy.get('a').contains('Insights').invoke('removeAttr', 'target').click();
    cy.wait(3000);
    cy.get('h1').contains('Trade Smarter').should('be.visible');

    // Click first artickle
    cy.get('a').contains('Read More').eq(0).click({ force: true });
    cy.wait(3000);
  });

  it('User want to search some articles in insights page', () => {
    // Click insight at navbar
    cy.get('a').contains('Insights').invoke('removeAttr', 'target').click();
    cy.wait(3000);
    cy.get('h1').contains('Trade Smarter').should('be.visible');

    // Search artice
    cy.get('input[title="Search"]').type('Stick{enter}', { force: true }).should('have.value', 'Stick');
    cy.wait(3000);
    cy.get('h1').contains('Stick').should('be.visible');
  });

  it('User want to search some articles in insights page with not correct topics', () => {
    // Click insight at navbar
    cy.get('a').contains('Insights').invoke('removeAttr', 'target').click();
    cy.wait(3000);
    cy.get('h1').contains('Trade Smarter').should('be.visible');

    // Search artice
    cy.get('input[title="Search"]').type('dssdsfs{enter}', { force: true }).should('have.value', 'dssdsfs');
    cy.wait(3000);
    cy.get('div').contains('Sorry').should('be.visible');
  });

  it('User want to search some articles in insights page with not input any value', () => {
    // Click insight at navbar
    cy.get('a').contains('Insights').invoke('removeAttr', 'target').click();
    cy.wait(3000);
    cy.get('h1').contains('Trade Smarter').should('be.visible');

    // Search artice
    cy.get('input[title="Search"]').type('{enter}', { force: true }).should('have.value', '');
    cy.wait(3000);
    cy.url().should('eq', 'https://insights.primecodex.com/?s=');
  });
});
