/// <reference types="cypress" />

describe('DashboardCorpuses', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: DashboardCorpuses', function() {
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
        cy.get('li:nth-of-type(2) span.p-tabview-title').click();
        cy.get('li:nth-of-type(3) span.p-tabview-title').click();
        cy.get('li:nth-of-type(4) span.p-tabview-title').click();

    });
});
