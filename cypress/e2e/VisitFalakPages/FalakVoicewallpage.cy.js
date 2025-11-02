/// <reference types="cypress" />

describe('FalakVoicewallpage', function() {

    let testData;

    before(function() {
        // Load test data from fixture
        cy.fixture('FalakTestData').then(function(data) {
            testData = data;
        });
    });

    it('Test: FalakVoicewallpage', function() {
        // Handle uncaught exceptions from the application
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            // This includes JSON parsing errors from API calls
            return false;
        });

        // ==========================================
        // Set viewport configuration
        // ==========================================
        cy.viewport(1200, 800);
        // ==========================================
        // Navigate to page
        // ==========================================
        cy.visit(`${testData.bestUrl}/voicewall/ar/s/falak`);
        cy.wait(1500);
        // ------------------------------------------
        // Action sequence 1
        // ------------------------------------------
        cy.get('div.p-2 a').click();
        cy.wait(4000);
        cy.get('#faq-0').click();
        cy.wait(4000);
        cy.get('#faq-1' ).click();
        cy.wait(4000);
        cy.get('#faq-2').click();
        cy.wait(4000);
        cy.get('#faq-3').click();
        cy.wait(4000);
        cy.get('#faq-4').click();
        cy.wait(4000);
        cy.get('#faq-5').click();
        cy.wait(4000);
        cy.get('#faq-6').click();
        cy.wait(4000);
        cy.get('#faq-7').click();
        cy.wait(4000);
        cy.get('#faq-8').click();
        cy.wait(4000);
        cy.get('div.flex > div:nth-of-type(1) g path').click();
        cy.wait(2000);
        cy.get('div.ReactModalPortal a').click();
        cy.wait(2000);
        cy.get('li.text-\\[\\#219F8A\\] > a').click();  
        cy.wait(2000);
        cy.get('div:nth-of-type(2) > div > div.flex > div:nth-of-type(2) g path').click();  
        cy.wait(2000);
        cy.get('div.ReactModalPortal a').click();
        cy.wait(2000);

        cy.get('li.text-\\[\\#219F8A\\] > a').click();
        cy.wait(2000);
    });
});
