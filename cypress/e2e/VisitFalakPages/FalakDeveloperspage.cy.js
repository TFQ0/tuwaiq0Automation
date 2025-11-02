/// <reference types="cypress" />

describe('FalakDeveloperspage', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakDeveloperspage', function() {
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
        cy.visit(`${testData.bestUrl}/developers`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('app-developers-page > div.main-content-card span.p-button-label').click();
        // ==========================================
        // Navigate to page
        // ==========================================
        cy.visit(testData.bestUrl);

        // ------------------------------------------
        // Action sequence 2
        // ------------------------------------------
        cy.get('app-header li.ng-star-inserted span').click();
        cy.get('#dev-api-from > div:nth-of-type(1) input').click();
        cy.get('#dev-api-from > div:nth-of-type(1) input').type('طلال فلاح القحص');
        cy.get('div:nth-of-type(2) input').click();
        cy.get('div:nth-of-type(2) input').type('test@test.com');

        cy.get('div:nth-of-type(3) span > input').click();
        cy.get('div:nth-of-type(3) span > input').type('512312312');
        cy.get('div:nth-of-type(3) div > input').click();
        cy.get('div:nth-of-type(3) div > input').type('+966');
        cy.get('span span').click();

        cy.get('#pn_id_15_0 > .ng-star-inserted').click();
        cy.get('div:nth-of-type(5) input').click();
        cy.get('div:nth-of-type(5) input').type('المهندس طلال القحص');
        cy.get('#reason').click();
        cy.get('#reason').type('المهندس طلال القحص');

        cy.get('div.p-checkbox-box').click();
        cy.get('app-website-layout button').click();

    });
});
