describe('Home Page Verification', function() {
    
    
});

it('Visit Home', function() {
    cy.visit('https://siwar.ksaa.gov.sa/home')
    cy.get('#home a[href="/result-page-public/%D8%AC%D9%8E%D8%AD%D9%92%D9%81%D9%8E%D9%84?searchType=lemma"]').click();
    
});

