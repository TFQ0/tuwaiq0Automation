/// <reference types="cypress" />

describe('ConcordancerTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: ConcordancerTool', function() {
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
        cy.visit(`${testData.bestUrl}/corpora/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('input').click();
        cy.get('input').type('طلال');
        cy.get('app-corpus-public-explore > div > div.col-12 a').click();
        cy.get('tr:nth-of-type(1) span.pi-info-circle').click();
        cy.get('span.p-overlaypanel-close-icon span').click();

        cy.get('tr:nth-of-type(1) span.pi-copy').click();
        cy.get('th.w-4').click();
        cy.get('th.w-4').click();
        cy.get('th.text-right').click();
        cy.get('th.text-right').click();

        cy.get('p > img.p-element').click();
        cy.get('p-dialog button').click();
        cy.get('form > div > span img').click();
        cy.get('span.p-paginator-pages > button:nth-of-type(2)').click();
        cy.get('span.p-paginator-pages > button:nth-of-type(3)').click();

        cy.get('span.p-paginator-pages > button:nth-of-type(4)').click();
        cy.get('button:nth-of-type(5)').click();
        cy.get('app-public-concordancer-page > div p-dropdown span').click();
        cy.get('#pn_id_78_1').click();
        cy.get('app-public-concordancer-page > div p-dropdown span').click();

        cy.get('#pn_id_78_2').click();
        cy.get('[aria-label="2"]').click();
        cy.get('app-public-concordancer-page > div p-dropdown span').click();
        cy.get('#pn_id_78_3').click();

    });
});
