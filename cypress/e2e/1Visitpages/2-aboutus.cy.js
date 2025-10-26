describe('about us page', function() {

    it('Test 1: about us page', function() {
        cy.visit('https://siwar.ksaa.gov.sa/aboutus')
        cy.wait(2000)
        cy.url().should('include', 'siwar.ksaa.gov.sa/aboutus')
        cy.get('a:nth-of-type(3) div > div').click({force: true});
        cy.wait(2000)
        cy.get('button.p-ripple').click({force: true});
        cy.wait(2000)
        cy.get('a:nth-of-type(2) div > div').click({force: true});
        cy.wait(2000)
        cy.get('a:nth-of-type(1) > p-chip > div').click({force: true});
        cy.wait(2000)
            
    });

    
    
});

