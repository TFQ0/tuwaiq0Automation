/// <reference types="cypress" />

describe('WordsBefore-AfterTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: WordsBefore-AfterTool', function() {
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
        cy.visit(`${testData.bestUrl}/words-before-after/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('app-concordancer-comp form input').click();
        cy.get('app-concordancer-comp form input').type('خالد');
        cy.get('div.col-12 button').click();
        cy.get('p > img.p-element').click();
        cy.get('p-dialog button').click();

        cy.get('form > div > span img').click();

    });
});
