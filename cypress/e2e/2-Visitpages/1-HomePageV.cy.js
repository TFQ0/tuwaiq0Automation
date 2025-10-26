describe('2- Home Page Verification', function() {
    
it('home v', function() {
    cy.visit('https://siwar.ksaa.gov.sa/home')
    cy.wait(2500);
    cy.get('#home [name="undefined"]').type('طلال{enter}');
    cy.wait(2500);
    cy.get('#pn_id_11_0 span.ml-2').click();
    cy.wait(2500);
    cy.get('#home a[href="/result-page-public/%D8%B3%D9%8F%D8%A4%D9%92%D8%AF%D9%8F%D8%AF?searchType=lemma"]').click();
    cy.wait(2500);
    cy.get('#pn_id_11_0 span.ml-2').click();
    cy.wait(2500);
    cy.get('#home div.latest-search-card a.border-none').click();
    cy.wait(5000);
    cy.get('#pn_id_11_0 span.ml-2').click();
    cy.wait(2500);
    cy.get('#home img[alt="courses-signup"]').click();
    cy.wait(2500);
    cy.get('#pn_id_11_0 span.ml-2').click();
    cy.wait(2500);
    cy.get('#home img.cursor-pointer.mt-4').click();
    cy.wait(2500);
    cy.get('#home button.p-link').click();
    cy.wait(4000);
    cy.get('#pn_id_11_0 span.ml-2').click();
    cy.wait(2500);
    cy.get('#home [name="undefined"]').click();
    cy.wait(2500);
});
    

});




