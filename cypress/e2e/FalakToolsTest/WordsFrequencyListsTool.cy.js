/// <reference types="cypress" />

describe('WordsFrequencyListsTool', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: WordsFrequencyListsTool', function() {
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
        cy.visit(`${testData.bestUrl}/words-frequency-lists/babe4d42-221a-4fc1-8ce9-03bd3fa92dc1`);
        cy.wait(3000);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
    
        cy.get('p-card input').clear()
        cy.get('p-card input').type('103');
      

        cy.get('div.stopWord div.p-checkbox-box').click();
        cy.get('div.numbersAndSpecialCharacters div.p-checkbox-box').click();
        cy.get('app-words-frequency-lists-comp > form > div span').click();
        cy.get('p > img.p-element').click();
        cy.get('p-dialog button').click();

        cy.get('th:nth-of-type(1) > p-sorticon svg').click();
        cy.get('th.p-highlight > p-sorticon svg').click();
        cy.get('th:nth-of-type(2) > p-sorticon svg').click();
        cy.get('th.p-highlight > p-sorticon svg').click();
        cy.get('th:nth-of-type(3) path:nth-of-type(4)').click();

        cy.get('th:nth-of-type(3) svg').click();
        cy.get('th:nth-of-type(4) svg').click();
        cy.get('th:nth-of-type(4) svg').click();
        // cy.get('[psortablecolumn="word"] > p-columnfilter.p-element > .p-column-filter > .p-column-filter-menu-button').click();

        // cy.get('#pn_id_98 > .p-dropdown-trigger').click();
        // cy.get('#pn_id_40_1').click();
        // cy.get('p-columnfilterformelement.p-element > .p-inputtext').type('يوم');
        // cy.get('[aria-label="تطبيق"] > .p-button-label').click();
        // cy.get('[psortablecolumn="word"] > p-columnfilter.p-element > .p-column-filter > .p-column-filter-menu-button').click();
        // cy.get('.p-button-outlined > .p-button-label').click();

        cy.get('[aria-label="2"]').click();
        cy.get('[aria-label="3"]').click();
        cy.get('[aria-label="4"]').click();
        cy.get('[aria-label="5"]').click();

        // cy.get('#pn_id_37 > .p-dropdown-trigger').click();
        // cy.get('#pn_id_37_1').click();
        // cy.get('#pn_id_37 > .p-dropdown-trigger').click();
        // cy.get('#pn_id_37_2').click();
        // cy.get('.p-ripple > .p-button-icon').click();

        // cy.get('p-element> p-dropdown-trigger.icon').click();
        // cy.get('#pn_id_78_1').click();
        // cy.get('app-public-concordancer-page > div p-dropdown span').click();

        // cy.get('#pn_id_78_2').click();
        // cy.get('[aria-label="2"]').click();
        // cy.get('app-public-concordancer-page > div p-dropdown span').click();
        // cy.get('#pn_id_78_3').click();

    });
});
