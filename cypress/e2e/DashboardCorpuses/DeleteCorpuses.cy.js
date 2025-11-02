/// <reference types="cypress" />

describe('DeleteCorpuses', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: DeleteCorpuses', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

        cy.loginToFalak();
        // ==========================================
        // Set viewport configuration
        // ==========================================
        cy.viewport(1200, 800);
        // ==========================================
        // Navigate to page
        // ==========================================
        cy.visit(`${testData.bestUrl}/d/corpuses`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('a.p-button-icon-only').click();
        cy.get('div.col-12 > button.p-button-danger > span.p-button-icon').click();
        cy.get('checkicon').click();

    });
});
