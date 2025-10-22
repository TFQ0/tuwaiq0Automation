/// <reference types="cypress" />

describe('User Login Tests - Aldiwan', () => {
  
  beforeEach(() => {
    cy.visit('https://www.aldiwan.net/')
  })

  it('should login with valid credentials', () => {
    // Use Cypress Studio to record login flow:
    // 1. Click login button
    // 2. Enter username/email
    // 3. Enter password
    // 4. Click submit
    // Click the magic wand (⚡) icon to start recording
  })

  it('should show error with invalid credentials', () => {
    // Record testing wrong credentials
  })

  it('should logout successfully', () => {
    // Record logout flow
  })

})

