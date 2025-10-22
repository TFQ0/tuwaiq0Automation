// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress"/>

// Import commands.js using ES2015 syntax:
import './commands'

// Import HTML Reporter
import 'cypress-mochawesome-reporter/register';

// Take screenshot on test failure
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${runnable.parent.title} -- ${test.title} (failed)`;
    cy.screenshot(screenshot);
  }
});