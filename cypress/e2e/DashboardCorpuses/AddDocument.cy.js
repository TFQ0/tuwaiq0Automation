/// <reference types="cypress" />

describe('AddDocument', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: AddDocument', function() {
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
        cy.visit(`${testData.bestUrl}/d/corpuses`);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('a.p-button-icon-only').click();
        cy.get('a.p-button-success > span').click();
        cy.get('button:nth-of-type(1) > span.p-button-label').click();
        cy.get('.flex > .p-inputtext').click();
        cy.get('.flex > .p-inputtext').clear();

        cy.get('.flex > .p-inputtext').type('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1) ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2)ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3) مَٰلِكِ يَوۡمِ ٱلدِّينِ (4) إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5) ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ (7)');  
        cy.wait(5000);

        cy.get('.p-input-icon-left > .p-inputtext').click();
        cy.get('.p-input-icon-left > .p-inputtext').type('سورة الفاتحة');
        cy.get('.p-ripple > .p-button-label').click();
        cy.get('.p-button-success').click();

        cy.get('.p-button-label').click();
        cy.get('.p-button-danger').click();

    });
});
