/// <reference types="cypress" />

describe('Home Page Tests - Aldiwan Website', () => {
  
  it('should visit the homepage successfully', () => {
    // Visit your website - update the URL
    cy.visit('https://www.aldiwan.net/')
    
    // Verify page loaded
    cy.title().should('exist')
    
    // Take a screenshot
    cy.screenshot('homepage-loaded')
  })

  it('should display main content', () => {
    cy.visit('https://www.aldiwan.net/')
    
    // Example assertions - update based on your actual website
    cy.get('body').should('be.visible')
    
    // This will intentionally fail to demonstrate error screenshots
    // Remove or update this line for your actual tests
    // cy.get('.non-existent-element').should('exist')
  })

  it('should navigate to important sections', () => {
    cy.visit('https://www.aldiwan.net/')
    
    // Add your navigation tests here
    cy.wait(1000)
    cy.screenshot('navigation-test')
  })

  // Empty test ready for recording with Cypress Studio
  it('Recorded test - Login flow', () => {
    cy.visit('https://www.aldiwan.net/')
    // Use Cypress Studio to record your actions here
    // Click the magic wand icon when this test runs
  })

  // Empty test ready for recording with Cypress Studio
  it('Recorded test - Search functionality', () => {
    cy.visit('https://www.aldiwan.net/')
    // Use Cypress Studio to record your actions here
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


