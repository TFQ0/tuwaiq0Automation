/// <reference types="cypress" />

describe('ExampleSearchTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: ExampleSearchTool', function() {
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
        cy.visit(`${testData.bestUrl}/search/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('div.lg\\:col-4 input').click();
        cy.get('div.lg\\:col-4 input').type('خالد');
        cy.get('div.lg\\:col-2 span').click();
        cy.get('p-checkbox.ng-untouched div.p-checkbox-box').click();
        cy.get('div.lg\\:col-2 span').click();

    });
});
