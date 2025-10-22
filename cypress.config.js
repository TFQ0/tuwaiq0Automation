const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Video recording for all tests
  video: true,
  
  // HTML Reporter configuration
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Tuwaiq Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // HTML Reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config;
    },
    
    // Base URL for your tests
    baseUrl: 'https://www.aldiwan.net/',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Screenshot configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    
    // Video configuration
    videosFolder: 'cypress/videos',
    videoCompression: 32,
    
    // Timeout configurations
    defaultCommandTimeout: 20000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    pageLoadTimeout: 60000,
    
    // Test isolation
    testIsolation: false,
    
    // Experimental features - Cypress Studio for recording tests
    experimentalStudio: true,
    
    // Retry configuration
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});