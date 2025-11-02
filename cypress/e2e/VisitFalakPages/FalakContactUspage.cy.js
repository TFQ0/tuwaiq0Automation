/// <reference types="cypress" />

describe('FalakContactUspage', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakContactUspage', function() {
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
        cy.visit(`${testData.bestUrl}/contact-us`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('form > div:nth-of-type(1) input').click();
        cy.get('form > div:nth-of-type(1) input').type('طلال القحص');
        cy.get('div:nth-of-type(2) input').click();
        cy.get('div:nth-of-type(2) input').type('test@test.com');
        cy.get('div.md\\:col-6 span > input').click();

        cy.get('div.md\\:col-6 span > input').type('5123123123');
        cy.get('div > input').click();
        cy.get('div > input').type('+966');
        cy.get('textarea').click();
        cy.get('textarea').clear();

        cy.get('textarea').type('طلال القحص');
        cy.get('div:nth-of-type(4) input').click();
        cy.get('div:nth-of-type(4) input').type('المهندس طلال القحص');
        cy.get('button').click();

    });
});
