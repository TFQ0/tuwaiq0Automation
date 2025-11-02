/// <reference types="cypress" />

describe('NgramsTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: NgramsTool', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

        // ==========================================
        // Set viewport configuration
        // ==========================================
        cy.viewport(1200, 800);
        // ==========================================
        // Navigate to page
        // ==========================================
        cy.visit(`${testData.bestUrl}/ngrams/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('div:nth-of-type(2) > div:nth-of-type(1) > input').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(1) > input').type('خالد');
        cy.get('form > div:nth-of-type(2) span').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(1) > input').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(1) > input').clear();
        // keyDown: Backspace;
        // keyUp: Backspace;
        // ------------------------------------------
        // Action sequence 2
        // ------------------------------------------
        cy.get('div:nth-of-type(2) > div:nth-of-type(2) > input').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(2) > input').type('محمد');
        cy.get('form > div:nth-of-type(2) span').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(2) > input').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(2) > input').clear();

        cy.get('div:nth-of-type(2) > div:nth-of-type(3) > input').click();
        cy.get('div:nth-of-type(2) > div:nth-of-type(3) > input').type('محمد');
        cy.get('div:nth-of-type(4) > input').click();
        cy.get('div:nth-of-type(4) > input').clear();
        cy.get('form > div:nth-of-type(2) span').click();

        cy.get('app-comp-ngrams > form img').click();
        cy.get('th:nth-of-type(1) sortalticon').click();
        cy.get('sortamountupalticon').click();
        cy.get('p > img.p-element').click();
        cy.get('p-dialog button').click();

    });
});
