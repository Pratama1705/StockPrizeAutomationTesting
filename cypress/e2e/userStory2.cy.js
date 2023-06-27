// ================= USER STORY 2 ====================
// Users desire access to a wide range of Forex currency pairs, as well as other
// tradable instruments like commodities, indices, and cryptocurrencies. They want
// the ability to diversify their portfolio and take advantage of different market
// opportunities.
// ===================================================

describe('User Story 2 Test Cases', () => {
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

    it('User want to see trading chart graphics', () => {
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
    });

    it('User want to see some currency in webapp and see their candle', () => {
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

      //   See currencies
      cy.get('div').contains('Symbol').should('be.visible');
      cy.get('div').contains('GBPUSD').click();
      cy.wait(3000);
      cy.get('div').contains('Pound Sterling vs US Dollar').should('be.visible');

      //   //   Open Metatrader web base
      //   cy.get('div[title="Menu"]').click();
      //   cy.wait(2000);
      //   cy.get('title="Trading accounts"').should('be.visible');

      //   //   Click MQL5
      //   cy.get('a[title="MQL5.com"]').invoke('removeAttr', 'target').click();
      //   cy.wait(2000)
      //   cy.get('')
    });
  });
});
