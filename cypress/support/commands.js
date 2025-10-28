// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// ***********************************************
// Custom Cypress Commands Configuration
// ***********************************************

// ====== Global Delay (for visual clarity / stability) ======
const COMMAND_DELAY = 1500; // delay in ms between actions

['click', 'type', 'clear', 'visit'].forEach((command) => {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    originalFn(...args);
    cy.wait(COMMAND_DELAY);
  });
});

// ====== Custom Login Command (UI with CAPTCHA) ======
// This requires manual CAPTCHA solving ONCE per session
// Cypress.Commands.add('login', (email, password) => {
//   cy.session(
//     [email, password], 
//     () => {
//       // Set up intercept to catch the login API call
//       cy.intercept('POST', '**/api/auth/login').as('loginRequest');
      
//       cy.visit('https://siwar.ksaa.gov.sa/login');

//       cy.get('#email').type(email);
//       cy.get('input.password-icon').type(`${password}{enter}`);

//       //  pause for manual CAPTCHA solving (only needed ONCE)
//       cy.pause();

//       // Wait for the login request to complete successfully (status 201)
//       cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);

//       // Verify successful login before saving the session
//       cy.url().should('include', '/dashboard');
//     },
//     {
//       validate() {
//         // Validate that the session is still valid
//         cy.request({
//           url: 'https://siwar.ksaa.gov.sa/dashboard',
//           failOnStatusCode: false
//         }).then((resp) => {
//           expect(resp.status).to.eq(200);
//         });
//       },
//       cacheAcrossSpecs: true // Share session across ALL test files
//     }
//   );
// });

// ====== API Login Command (NO CAPTCHA) ======
// Bypasses UI login entirely - use this for automated CI/CD pipelines
Cypress.Commands.add('loginViaAPI', (email, password) => {
  cy.session(
    ['api', email, password],
    () => {
      cy.request({
        method: 'POST',
        url: 'https://siwar.ksaa.gov.sa/api/auth/login',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: {
          username: email,  // API expects 'username' field (from Bruno API spec)
          password: password
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201);
        
        // Store the JWT token from response (lowercase 'token')
        if (response.body.token) {
          const token = response.body.token;
          
          // Visit a page to set localStorage (cy.request doesn't have window access)
          cy.visit('https://siwar.ksaa.gov.sa/dashboard', { failOnStatusCode: false });
          cy.window().then((win) => {
            win.localStorage.setItem('authToken', token);
          });
          
          // Log success for debugging
          cy.log('API Login successful, JWT token stored');
        }
        
        // Cookies should be automatically stored by cy.request
      });
    },
    {
      validate() {
        // Validate session by checking if token exists and dashboard is accessible
        cy.visit('https://siwar.ksaa.gov.sa/dashboard', { failOnStatusCode: false });
        cy.window().then((win) => {
          const token = win.localStorage.getItem('authToken');
          expect(token).to.exist;
        });
      },
      cacheAcrossSpecs: true
    }
  );
});


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
