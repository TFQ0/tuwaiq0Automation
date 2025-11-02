/// <reference types="cypress" />

describe('PrefixesAndSuffixesTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: PrefixesAndSuffixesTool', function() {
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
        cy.visit(`${testData.bestUrl}/prefixes-and-suffixes/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('app-prefixes-and-suffixes-comp input').click();
        cy.get('app-prefixes-and-suffixes-comp input').type('يوم');
        cy.get('app-prefixes-and-suffixes-comp div.lg\\:col-2 span').click();
        cy.get('span > div:nth-of-type(1) th:nth-of-type(1) svg').click();
        cy.get('th.p-highlight svg').click();

        cy.get('span > div:nth-of-type(1) th:nth-of-type(2)').click();
        cy.get('span > div:nth-of-type(1) th:nth-of-type(2)').click();
        cy.get('span > div:nth-of-type(2) th:nth-of-type(1)').click();
        cy.get('span > div:nth-of-type(2) th:nth-of-type(1)').click();
        cy.get('span > div:nth-of-type(2) th:nth-of-type(2) svg').click();

        cy.get('span > div:nth-of-type(2) th.p-highlight svg').click();
        cy.get('div:nth-of-type(3) th:nth-of-type(2)').click();
        cy.get('div:nth-of-type(3) th:nth-of-type(2)').click();
        cy.get('p > img.p-element').click();

        cy.get('p-dialog button').click();

    });
});
