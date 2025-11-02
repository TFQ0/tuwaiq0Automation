/// <reference types="cypress" />

describe('FalakLogin', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakLogin', function() {
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
        // Login and save session
        // ==========================================
        cy.loginToFalak();
        
        // ==========================================
        // Verify we're logged in
        // ==========================================
        cy.visit(`${testData.bestUrl}/d`);
        cy.url().should('include', '/d');

    });
});
