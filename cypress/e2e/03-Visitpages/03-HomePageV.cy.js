import testData from '../../fixtures/siwarTestData.json';
describe('03- Home Page Verification', function() {
    
it('home Verification', function() {
    // Visit home page and verify it loads
    cy.visit('https://siwar.ksaa.gov.sa/home')
    
    cy.url().should('include', '/home');
    
    // Search for term and verify search input works
    cy.get('#home [name="undefined"]').should('be.visible').type(testData.searchTerms.validSearches.arabic[0] + '{enter}');
    
    cy.get('#home [name="undefined"]').should('have.value', testData.searchTerms.validSearches.arabic[0]);
    
    // Open menu and verify it's visible
    cy.get('#pn_id_11_0 span.ml-2').should('be.visible').click();
    
    
    // Click search result link and verify it exists
    cy.get('#home a[href="/result-page-public/%D8%B3%D9%8F%D8%A4%D9%92%D8%AF%D9%8F%D8%AF?searchType=lemma"]').should('exist').click();
    
    
    // Open menu again and verify it's clickable
    cy.get('#pn_id_11_0 span.ml-2').should('be.visible').click();
    
    
    // Click latest search card and verify it exists
    cy.get('#home div.latest-search-card a.border-none').should('exist').click();
    
    
    // Open menu and verify visibility
    cy.get('#pn_id_11_0 span.ml-2').should('be.visible').click();
    
    
    // Click courses signup image and verify it's visible
    cy.get('#home img[alt="courses-signup"]').should('be.visible').click();
    
    
    // Open menu and verify
    cy.get('#pn_id_11_0 span.ml-2').should('be.visible').click();
    
    
    // Click cursor pointer image and verify it exists
    cy.get('#home img.cursor-pointer.mt-4').should('be.visible').click();
        
    
    // Click button link and verify it's visible
    cy.get('#home button.p-link').should('be.visible').click();
  
    
    // Open menu final time and verify
    cy.get('#pn_id_11_0 span.ml-2').should('be.visible').click();
    
    
    // Click search input and verify it's interactable
    cy.get('#home [name="undefined"]').should('be.visible').click();
    
});
    

});




