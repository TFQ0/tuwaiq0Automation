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
// ====== Global Delay (for visual clarity / stability) ======
const COMMAND_DELAY = 5000; // delay in ms between actions

['click', 'type', 'clear', 'visit'].forEach((command) => {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    originalFn(...args);
    cy.wait(COMMAND_DELAY);
  });
});
// ====== Custom Login Command with Session ======
/**
 * Login command that saves and restores the session
 * This allows you to log in once and reuse the session across multiple tests
 * 
 * Usage in tests:
 *   cy.loginToFalak() - logs in with credentials from fixture
 */
Cypress.Commands.add('loginToFalak', () => {
  cy.fixture('FalakTestData').then((testData) => {
    cy.session(
      'falak-user-session', // Session name/key
      () => {
        // This function runs only once to create the session
        cy.visit(`${testData.bestUrl}/auth/login`);
        cy.get('#username').type(testData.username);
        cy.get('div:nth-of-type(2) input').type(testData.password);
        cy.get('div.p-checkbox-box').click();
        cy.get('button > span').click();
        
        // Wait for login to complete
        cy.url().should('include', '/d'); // Verify we're logged in
      },
      {
        cacheAcrossSpecs: true // Share session between different test files
      }
    );
  });
});

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