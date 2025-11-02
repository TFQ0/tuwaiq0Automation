/// <reference types="cypress" />

describe('StatisticsTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: StatisticsTool', function() {
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
        cy.visit(`${testData.bestUrl}/statistics/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(1) sortalticon').click();
        cy.get('sortamountupalticon').click();
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(2)').click();
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(2)').click();
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(3)').click();

        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(3)').click();
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(4)').click();
        cy.get('p-tabpanel:nth-of-type(1) th:nth-of-type(4)').click();
        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(1)').click();

        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(1)').click();
        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(2)').lclick();
        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(3)').click();
        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(3)').click();
        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(4)').click();

        cy.get('p-tabpanel:nth-of-type(2) th:nth-of-type(4)').click();
        cy.get('#pn_id_691_header_action').click();
        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(1) sortalticon').click();
        cy.get('sortamountupalticon').click();
        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(2)').click();

        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(2)').click();
        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(3)').click();
        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(4)').click();
        cy.get('p-tabpanel:nth-of-type(3) th:nth-of-type(4)').click();
        cy.get('#pn_id_693_header_action').click();

        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(1) sortalticon').click();
        cy.get('sortamountupalticon').click();
        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(2)').click();
        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(2)').click();
        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(3)').click();

        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(3)').click();
        cy.get('p-tabpanel:nth-of-type(4) th:nth-of-type(4)').click();
        cy.get('sortamountupalticon').click();
        cy.get('#pn_id_687_header_action').click();
        cy.get('p-tabpanel:nth-of-type(1) img').click();

        cy.get('#pn_id_689_header_action').click();
        cy.get('p-tabpanel:nth-of-type(2) img').click();
        cy.get('#pn_id_691_header_action').click();
        cy.get('p-tabpanel:nth-of-type(3) img').click();
        cy.get('#pn_id_693_header_action').click();

        cy.get('p-tabpanel:nth-of-type(4) div > div > button').click();
        cy.get('div.surface-50 > div img.p-element').click();
        cy.get('p-dialog button').click();

    });
});
