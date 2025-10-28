describe('02- siwar Verification', function() {

    it('Test 1: siwar Verification', function() {
        // Visit the website and verify it loads correctly
        cy.visit('https://siwar.ksaa.gov.sa/')
        
        // Assert URL is correct
        cy.url().should('include', 'siwar.ksaa.gov.sa')
        
        // Assert page title
        cy.title().should('exist')
        
        // Assert and click on the main image/logo
        cy.get('#home img.cursor-pointer.mt-4')
            .should('be.visible')
            .should('exist')
            .click({force: true});
        
        // Assert button exists and is clickable, then click it
        cy.get('#home button.p-link')
            .should('be.visible')
            .should('not.be.disabled')
            .click({force: true});
        
        // Assert first menu item exists and click
        cy.get('#pn_id_11_1 a.ng-star-inserted')
            .should('exist')
            .should('be.visible')
            .click({force: true});
        
        // Assert second menu item and verify text before clicking
        cy.get('#pn_id_11_2 span.ml-2')
            .should('exist')
            .should('be.visible')
            .should('not.be.empty')
            .click({force: true});
        
        // Assert third menu item exists and is visible
        cy.get('#pn_id_11_3 span.ml-2')
            .should('exist')
            .should('be.visible')
            .should('not.be.empty')
            .click({force: true});
        
        // Assert fourth menu item
        cy.get('#pn_id_11_4 span.ml-2')
            .should('exist')
            .should('be.visible')
            .should('not.be.empty')
            .click({force: true});
        
        // Assert fifth menu item and verify it's clickable
        cy.get('#pn_id_11_5 span.ml-2')
            .should('exist')
            .should('be.visible')
            .should('not.be.empty')
            .click({force: true});
        
        // Final assertions to verify page state after all interactions
        cy.url().should('exist')
        cy.get('body').should('be.visible')
    });
    
});