/// <reference types="cypress" />

describe('FalakCorporapage', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakCorporapage', function() {
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
        cy.visit(`${testData.bestUrl}/corpora`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('div.search input').type('مجمع');
        cy.get('div.search input').clear();
        cy.get('div.search input').click();
        cy.get('#home > div i').click();
        cy.get('div:nth-of-type(2) div.p-multiselect-label-container > div').click();
        cy.get('#pn_id_20_0').click();
        cy.get('#pn_id_20_1').click();
        cy.get('#pn_id_20_2').click();
        cy.get('#pn_id_20_3').click();

        cy.get('app-corpuses-public-explore > div.surface-card button').click();
        cy.get('div:nth-of-type(3) div.p-multiselect-label-container > div').click();
        cy.get('#pn_id_21_0').click();
        cy.get('#pn_id_21_1').click();
        cy.get('#pn_id_21_2').click();

        cy.get('div.p-multiselect-header > div path').click();
        cy.get('app-corpuses-public-explore > div.surface-card button').click();
        cy.get('div:nth-of-type(4) svg').click();
        cy.get('#pn_id_22_0').click();
        cy.get('#pn_id_22_1').click();

        cy.get('div.p-multiselect-header > div svg').click();
        cy.get('app-corpuses-public-explore > div.surface-card button').click();
        cy.get('div:nth-of-type(5) div.p-multiselect-label-container > div').click();
        cy.get('#pn_id_23_0').click();
        cy.get('#pn_id_23_1').click();

        cy.get('#pn_id_23_2').click();
        cy.get('div.p-multiselect-header div.p-checkbox-box').click();
        cy.get('div.p-multiselect-header div.p-checkbox-box').click();
        cy.get('app-corpuses-public-explore > div.surface-card button').click();
        cy.get('div.lg\\:px-8 > div > div > div:nth-of-type(3) div:nth-of-type(2)').click();

        cy.get('div.lg\\:px-8 > div > div > div:nth-of-type(3) div > div:nth-of-type(1)').click();
        cy.get('p-dataview > div > div > div > div:nth-of-type(1) div.mt-4 > a').click();
        cy.get('div.text-center > div > a:nth-of-type(1) img').click();
        cy.get('a:nth-of-type(2) > div').click();
        cy.get('a:nth-of-type(3) > div').click();

        cy.get('a:nth-of-type(4) > div').click();
        cy.get('a:nth-of-type(6) img').click();
        cy.get('a:nth-of-type(7) img').click();
        cy.get('a:nth-of-type(8) > div > div').click();
        cy.get('a:nth-of-type(9) img').click();

        cy.get('a:nth-of-type(10) > div > div').click();
        cy.get('span > div').click();
        cy.get('#pn_id_436_2 > .ng-star-inserted').click();

        cy.get(':nth-child(3) > .flex > span').click();

    });
});
