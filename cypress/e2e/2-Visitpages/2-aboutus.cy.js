describe('about us page', function() {

    
    
});

it('Test 1: about us page', function() {
    cy.visit('https://siwar.ksaa.gov.sa/aboutus')
    cy.wait(1000);
    cy.get('#home div:nth-child(2) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(3) > div.question-text > h3.text-lg > p:nth-child(2) > i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(4) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(5) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(6) p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div.focused p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(7) p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div.focused p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(8) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(9) h3.text-lg').click();
    cy.wait(1000);
    cy.get('#home div.focused h3.text-lg').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(10) p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div.focused p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(11) p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div.focused p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(12) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(13) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(14) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(15) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(16) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(17) i.pi').click();
    cy.wait(1000);
    cy.get('#home i.pi-minus').click();
    cy.wait(1000);
    cy.get('#home div:nth-child(18) p:nth-child(2)').click();
    cy.wait(1000);
    cy.get('#home div.focused p:nth-child(2)').click();
    cy.wait(1000);
});

