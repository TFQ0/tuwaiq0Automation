/// <reference types="cypress" />

describe('FrequencyDistributionTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FrequencyDistributionTool', function() {
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
        cy.visit(`${testData.bestUrl}/frequency-distribution/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('app-frequency-distribution-comp form input').click();
        cy.get('app-frequency-distribution-comp form input').type('قال محمد');
        cy.get('div.col-12 button').click();
        cy.wait(20000);
        cy.get('th:nth-of-type(2) svg').click();
        cy.get('th.p-highlight svg').click();

        cy.get('th:nth-of-type(3)').click();
        cy.get('th:nth-of-type(3)').click();
        cy.get('th:nth-of-type(4)').click();
        cy.get('th:nth-of-type(4)').click();
        cy.get('th:nth-of-type(5)').click();

        cy.get('th:nth-of-type(5)').click();
        cy.get('div.tool-results button').click();
        cy.get('p-dialog button').click();
        cy.get('form > div > span img').click();
        cy.get('p > img.p-element').click();

        cy.get('p-dialog button').click();

    });
});
