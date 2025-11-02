/// <reference types="cypress" />

describe('AddCorpuses', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: AddCorpuses', function() {
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
        cy.visit(`${testData.bestUrl}/d/corpuses/add`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('#pn_id_13_content > .p-panel-content > :nth-child(1) > .lg\\:col-6 > .p-inputtext').click();
        cy.get('#pn_id_13_content > .p-panel-content > :nth-child(1) > .lg\\:col-6 > .p-inputtext').type('طلال فلاح القحص1234554321');
        cy.get('textarea').click();
        cy.get('textarea').type('طلال فلاح القحص1234554321');
        cy.get('p').click();

        cy.get('#pn_id_48 > .p-multiselect-trigger').click();
        cy.get('#pn_id_48_0').click();
        cy.get('#pn_id_48_0 > span.ng-star-inserted').click();
        cy.get('#pn_id_48_1 > .ng-star-inserted').click();
        cy.get('#pn_id_48 > .p-multiselect-trigger').click();

        cy.get('form > div span').click();

    });
});
