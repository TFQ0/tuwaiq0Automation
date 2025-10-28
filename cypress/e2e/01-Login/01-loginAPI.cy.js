/// <reference types="cypress" />

/**
 * ======================================
 * Login Tests - API Authentication
 * ======================================
 * 
 * This test file uses API authentication to bypass CAPTCHA.
 * Perfect for automated CI/CD pipelines.
 * 
 * To use:
 * - Replace cy.login() with cy.loginViaAPI() in your tests
 * - NO manual CAPTCHA solving required
 */

describe('01-Dashboard Tests - API Login', () => {
  beforeEach(() => {
    // Use API login instead of UI login - NO CAPTCHA!
    cy.loginViaAPI('talal123@talal.com', 'FGH1234fgh');
  });

  it('should open dashboard successfully', () => {
    cy.visit('https://siwar.ksaa.gov.sa/dashboard');
    cy.contains('dashboard').should('be.visible');
  });

  it('should open lexicons page', () => {
    cy.visit('https://siwar.ksaa.gov.sa/dashboard/lexicons');
    cy.contains('lexicons').should('be.visible');
  });

  it('should maintain authentication across multiple pages', () => {
    cy.visit('https://siwar.ksaa.gov.sa/dashboard');
    cy.url().should('include', '/dashboard');
    
    cy.visit('https://siwar.ksaa.gov.sa/dashboard/lexicons');
    cy.url().should('include', '/lexicons');
    
    // Verify we're still authenticated
    cy.getCookie('auth').should('exist');
  });
});

