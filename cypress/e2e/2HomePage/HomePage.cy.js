/// <reference types="cypress" />

describe('Home Page Tests - Aldiwan Website', () => {
  
  it('should visit the homepage successfully', () => {
   
    cy.visit('https://www.aldiwan.net/')
    
  
    cy.title().should('exist')
    
  
    cy.screenshot('homepage-loaded')
  })

  it('should display main content', () => {
    cy.visit('https://www.aldiwan.net/')
    

    cy.get('body').should('be.visible')
    

  })

  it('should navigate to important sections', () => {
    cy.visit('https://www.aldiwan.net/')
    
    // Add your navigation tests here
    cy.wait(1000)
    cy.screenshot('navigation-test')
  })

 
  it('Recorded test - Login flow', () => {
    cy.visit('https://www.aldiwan.net/')

  })

  // Empty test ready for recording with Cypress Studio
  it('Recorded test - Search functionality', () => {
    cy.visit('https://www.aldiwan.net/')

  })

});


it('HomePageicon0', function() {
  cy.visit('https://www.aldiwan.net/')
  cy.get('div.col-7 #navbarMenu3').click();
  cy.get('div.col-7 #navbarMenu2').click();
  cy.get('div.col-7 #navbarMenu1').click();
  cy.get('#home div.col-7 li:nth-child(1) a').click();
  
});

it('HomePageicon123', function() {

  
});


