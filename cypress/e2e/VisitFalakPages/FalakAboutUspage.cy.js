/// <reference types="cypress" />

describe('FalakAboutUsPage', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakAboutUsPage', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

        // Set viewport size
        cy.viewport(1200, 800)
        // Navigate to the website
        cy.visit(`${testData.bestUrl}/aboutus`)
        cy.get('a:nth-of-type(1) div > div').click()
        cy.get('a:nth-of-type(2) div > div').click()
        cy.get('a:nth-of-type(3) div > div').click()
        cy.get('button').click()

    });
});