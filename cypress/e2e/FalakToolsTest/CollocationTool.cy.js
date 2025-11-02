/// <reference types="cypress" />

describe('CollocationTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: CollocationTool', function() {
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
        cy.visit(`${testData.bestUrl}/collocation/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('app-collocation-comp form input').click();
        cy.get('app-collocation-comp form input').type('خالد');
        cy.get('app-collocation-comp form > div > div:nth-of-type(1) span').click();
        cy.get('#pn_id_27_1').click();
        cy.get('div:nth-of-type(3) span').click();

        cy.get('#pn_id_29_1').click();
        cy.get('div.content-filter button').click();
        cy.wait(4000);
        cy.get('th:nth-of-type(1) > p-sorticon svg').click();
        cy.get('th.p-highlight > p-sorticon svg').click();
        cy.get('th:nth-of-type(2) > p-sorticon svg').click();

        cy.get('th.p-highlight > p-sorticon path').click();
        cy.get('th:nth-of-type(3)').click();
        cy.get('th:nth-of-type(3)').click();
        cy.get('th:nth-of-type(5) > p-sorticon svg').click();
        cy.get('th.p-highlight > p-sorticon svg').click();

        // cy.get('div.p-datatable-header svg').click();
        // cy.get('.p-button-text > .mx-1').click();
        // cy.get('#pn_id_229_3').click();
        // cy.get('#pn_id_229_5').click();
        // cy.get('div.p-datatable-header button').click();

        cy.get('span.p-paginator-pages > button:nth-of-type(2)').click();
        cy.get('span.p-paginator-pages > button:nth-of-type(3)').click();
        cy.get('span.p-paginator-pages > button:nth-of-type(4)').click();

    });
});
