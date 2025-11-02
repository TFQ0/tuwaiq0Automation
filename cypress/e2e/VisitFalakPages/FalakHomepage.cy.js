/// <reference types="cypress" />

describe('HomePagefalak', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: HomePagefalak', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

        // Set viewport size
        cy.viewport(1200, 800)
        // Navigate to the website
        cy.visit(testData.bestUrl)
        cy.get('p-card:nth-of-type(1) h5').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('p-card:nth-of-type(3) h5').click()
        cy.get('div.back-to-top-btn button').click()
        cy.get('p-card:nth-of-type(4) h5').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('p-card:nth-of-type(2) > div > div > div').click()
        cy.get('div.section-tools > div > div:nth-of-type(1) button').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('app-home div:nth-of-type(2) button > span').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('div:nth-of-type(3) button').click()
        cy.get('svg').click()
        cy.get('div:nth-of-type(3) button > span').click()
        cy.get('path').click()
        cy.get('div:nth-of-type(4) button').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('div > div:nth-of-type(5) button').click()
        cy.get('path').click()
        cy.get('div:nth-of-type(6) button > span').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('div:nth-of-type(7) button').click()
        cy.get('svg').click()
        cy.get('div:nth-of-type(8) button > span').click()
        cy.get('svg').click()
        cy.get('div:nth-of-type(9) button').click()
        cy.get('svg').click()
        cy.get('div:nth-of-type(10) button').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('div:nth-of-type(11) button').click()
        cy.get('svg').click()
        cy.get('div:nth-of-type(12) button').click()
        cy.get('p-dynamicdialog button').click()
        cy.get('div:nth-of-type(13) button > span').click()
        cy.get('svg').click()
        cy.get('div.back-to-top-btn button').click()
        cy.get('div:nth-of-type(1) > div > div.mt-4 span').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('div:nth-of-type(3) div.mt-4 > a').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('div.mt-8 > a').click()
        cy.get('app-header li:nth-of-type(1) span').click()
        cy.get('section.section-the-month-corpus div:nth-of-type(3) span').click()
        cy.get('app-header li:nth-of-type(1) > a').click()

    });
});
