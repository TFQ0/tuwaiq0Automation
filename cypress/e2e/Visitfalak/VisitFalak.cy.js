/// <reference types="cypress" />


describe('falak Verification', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test : falak Verification', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            // when the application has an unhandled promise rejection or JSON parse error
            return false;
        });

        // Set viewport configuration
        cy.viewport(1200, 800);

        // Visit the website using URL from fixture and verify it loads correctly
        cy.visit(testData.bestUrl)

        cy.get('.list-none > :nth-child(2) > .flex > span').click()
        cy.get(':nth-child(3) > .flex > span').click()
        cy.get(':nth-child(4) > .flex > span').click()
        cy.get('.text-gray-600 > :nth-child(1) > .flex > span').click()
        cy.get(':nth-child(6) > .flex > span').click()
        cy.get('.ng-star-inserted > .flex > span').click()
        cy.get(':nth-child(8) > .flex > span').click()

    });
    
});