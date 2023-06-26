// ================= USER STORY 1 ====================
// Users appreciate a website that provides clear and transparent information
// about the trading process, account types, fees, spreads, leverage, and other
// trading conditions. They want to have a comprehensive understanding of what the
// platform offers before making a decision.
// ===================================================

describe('User Story 1 Test Cases', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://primecodex.com/');
    cy.wait(5000);
  });

  it('User want to see some primecodex products from primecodex website landing page', () => {
    // Hover element products di navbar
    cy.get('div').contains('Products').trigger('mouseover');
    cy.wait(3000);

    // Choose selected element
    cy.get('a > p').contains('Trading Conditions').click({ force: true });
    cy.wait(3000);
    cy.url().should('include', '/trading-condition');
    cy.get('h1').contains('Trading').should('be.visible');
  });

  it('User want to see some primecodex Platform & Tool from primecodex website landing page', () => {
    // Hover element products di navbar
    cy.get('div').contains('Platform & Tool').trigger('mouseover');
    cy.wait(3000);

    // Choose selected element
    cy.get('a > p').contains('MetaTrader 5').click({ force: true });
    cy.wait(3000);
    cy.url().should('include', '/metatrader-5');
    cy.get('h1').contains('Metatrader').should('be.visible');
  });

  it('User want to see some primecodex partnership from primecodex website landing page', () => {
    // Click Partnership in navbar
    cy.get('a').contains('Partnership').click();
    cy.wait(3000);
    cy.url().should('include', '/partnership');
    cy.get('h1').contains('Introducer').should('be.visible');
  });

  it('User want to see some primecodex company information from primecodex website landing page', () => {
    // Click Partnership in navbar
    cy.get('a').contains('About').click();
    cy.wait(3000);
    cy.url().should('include', '/about');
    cy.get('h1').contains('About').should('be.visible');
  });

  it('User want to see sample current stockprize from landing page', () => {
    // Scroll into current stock prize
    cy.get('h3')
      .contains('What We Offer?')
      .scrollIntoView({ offset: { top: -500 } });

    cy.wait(3000);
  });
});
