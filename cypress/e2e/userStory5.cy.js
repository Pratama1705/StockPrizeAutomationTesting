// ================= USER STORY 5 ====================
// Some users may encounter difficulties during the account verification process,
// such as delays in document verification or challenges in submitting the required documents.
// This can hinder users from fully accessing all trading features and functionalities.
// ===================================================

describe('User Story 5 Test Cases', () => {
  const email = 'testingqaassignment@gmail.com';
  const pass = 'Testing1234';

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://secure.primecodex.com/dashboard');
    cy.wait(5000);
  });

  it('User want to verify their identity', () => {
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

    // Scroll down to verification section & click verify
    cy.get('h2').contains('Verifications').scrollIntoView();
    cy.wait(3000);
    cy.get('button').contains('Verify Now').eq(0).click();
    cy.wait(3000);

    // Verify page & input value
    cy.get('h1').contains('Identity Verification Request').should('be.visible');
    cy.get('select').select('ID Card');
    cy.wait(1000);
    cy.get('input[id="id-number"]').type('0987654321').should('have.value', '0987654321');

    // Click logout button
    cy.get('button').contains('Logout').click();
    cy.wait(3000);

    // Click yes in pop up modal
    cy.get('button').contains('Yes').click();
    cy.wait(3000);
    cy.get('h1').contains('Login Account').should('be.visible');
  });

  it('User want to verify their identity but without input any field', () => {
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

    // Scroll down to verification section & click verify
    cy.get('h2').contains('Verifications').scrollIntoView();
    cy.wait(3000);
    cy.get('button').contains('Verify Now').eq(0).click();
    cy.wait(3000);

    // Verify page & input value
    cy.get('h1').contains('Identity Verification Request').should('be.visible');
    cy.get('select').select('ID Card');
    cy.wait(1000);
    cy.get('input[id="id-number"]').type('0987654321').should('have.value', '0987654321');

    // Click submit
    cy.get('button').contains('Submit').click();
    cy.wait(3000);
    cy.get('h2').contains('Incomplete Data!').should('be.visible');
    cy.get('button').contains('Oke').click();

    // Click logout button
    cy.get('button').contains('Logout').click();
    cy.wait(3000);

    // Click yes in pop up modal
    cy.get('button').contains('Yes').click();
    cy.wait(3000);
    cy.get('h1').contains('Login Account').should('be.visible');
  });

  it('User want to verify their identity but without input some field', () => {
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

    // Scroll down to verification section & click verify
    cy.get('h2').contains('Verifications').scrollIntoView();
    cy.wait(3000);
    cy.get('button').contains('Verify Now').eq(0).click();
    cy.wait(3000);

    // Click submit
    cy.get('button').contains('Submit').click();
    cy.wait(3000);
    cy.get('h2').contains('Incomplete Data!').should('be.visible');
    cy.get('button').contains('Oke').click();

    // Click logout button
    cy.get('button').contains('Logout').click();
    cy.wait(3000);

    // Click yes in pop up modal
    cy.get('button').contains('Yes').click();
    cy.wait(3000);
    cy.get('h1').contains('Login Account').should('be.visible');
  });
});
