// ================= USER STORY 4 ====================
// They expect risk management tools like guaranteed stop-loss orders, take-profit
// levels, and margin calculators to help them manage and minimize risks effectively.
// ===================================================

describe('User Story 4 Test Cases', () => {
  const email = 'testingqaassignment@gmail.com';
  const pass = 'Testing1234';

  context('Prime Codex', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('https://secure.primecodex.com/dashboard');
      cy.wait(5000);
    });

    it('Prime Codex App', () => {
      // Input Email Login
      cy.get('h1').contains('Login Account').should('be.visible');
      cy.get('input[id="email"]').type(email).should('have.value', email);
      cy.wait(1000);

      // Input Pass Login
      cy.get('input[id="password"]').type(pass).should('have.value', pass);
      cy.wait(1000);

      // Klik login
      cy.get('button').contains('Login').click();
      cy.get(3000);
      cy.get('h1').contains('My Account').should('be.visible');

      // Trading platform section
      cy.get('h2').contains('Trading Platforms').scrollIntoView();
      cy.wait(3000);
    });
  });

  context('Metatrader Web', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('https://trade.metatrader5.com/terminal');
      cy.wait(5000);
    });

    it.only('User want to buy some stock prize and set stop loss in market', () => {
      // Click accept
      cy.get('button').contains('Accept').click();
      cy.wait(3000);
      cy.get('button').contains('Open Demo account').should('be.visible');

      // Click open demo account
      cy.get('button').contains('Open Demo account').click();
      cy.wait(3000);
      cy.get('div').contains('New account opened').should('be.visible');

      // Click started demo account button
      cy.get('button').contains('Get started with your account').click();
      cy.wait(5000);
      cy.get('canvas').should('be.visible');

      //   Stop Loss
      cy.wait(3000);
      cy.get('div[title="Depth Of Market (Alt + B)"]').click();
      cy.wait(3000);
      cy.get('button').contains('Buy').click();
      cy.wait(1500);
      cy.get('span').contains('Volume').should('be.visible');
      cy.get('div').contains('Stop Loss').parent().find('button').eq(1).click();
      cy.wait(3000);
    });
  });
});
