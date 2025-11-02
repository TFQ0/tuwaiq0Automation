/// <reference types="cypress" />

describe('AddRecord', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: AddRecord', function() {
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
        cy.get('div:nth-of-type(9) a:nth-of-type(1) > span').click();
        cy.get(':nth-child(1) > .p-inputtext').click();
        cy.get(':nth-child(1) > .p-inputtext').type('طلال');
        cy.get('#pn_id_93 > .p-multiselect-trigger').click();

        cy.get('p-multiselectitem:nth-of-type(1) span.ng-star-inserted').click();
        cy.get('div:nth-of-type(3) > input').click();
        cy.get('div:nth-of-type(3) > input').type('طلال');
        cy.get('div:nth-of-type(4) > input').click();

        cy.get('div:nth-of-type(4) > input').type('2025');
        cy.get('form > div button').click();

    });
});
