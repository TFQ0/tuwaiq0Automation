/// <reference types="cypress" />

describe('FalakDashboard', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakDashboard', function() {
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
        // Restore login session (no need to login again!)
        // ==========================================
        cy.loginToFalak();
        
        // ==========================================
        // Navigate to page
        // ==========================================
        cy.visit(`${testData.bestUrl}/d`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('li.ng-tns-c425409149-8 > a').click();
        cy.get('li.ng-tns-c425409149-9 > a').click();
        cy.get('app-header > div > div > div span').click();
        cy.get('dashboard-menu > ul > li > ul > li.ng-tns-c425409149-27 > a').click();
        cy.get('li.ng-tns-c425409149-34 span').click();

        cy.get('dashboard-menu > ul > li > ul > li.ng-tns-c425409149-28 > a').click();
        cy.get('li.ng-tns-c425409149-35 span').click();
        cy.get('app-header > div > div > div span').click();
        cy.get('dashboard-menu > ul > li > ul > li.ng-tns-c425409149-45 > a').click();
        cy.get('li.ng-tns-c425409149-53 > a').click();

        cy.get('app-header div > div > a').click();
        cy.get('dashboard-menu > ul > li > ul > li.ng-tns-c425409149-59 > a > span').click();
        cy.get('li.ng-tns-c425409149-65 span').click();
        cy.get('li.ng-tns-c425409149-57 > a').click();
        cy.get('a:nth-of-type(2) > i').click();

        cy.get('#password').type('WEwe321123');

    });
});
