/// <reference types="cypress" />

describe('logout', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: logout', function() {
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
        cy.get('.ng-tns-c425409149-12.ng-tns-c425409149-8 > .ng-trigger > .active-menuitem > .ng-star-inserted').click();
        cy.get('button.p-element > .pi').click();

    });
});
