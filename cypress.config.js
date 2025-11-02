const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    testIsolation: true,
    
    // Video Recording Configuration
    video: true,
    videoCompression: false, // Disable compression to prevent corruption
    videosFolder: 'cypress/videos',
    
    // Screenshot Configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    
    // Reporter Configuration
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Falak Automation Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      videoOnFailOnly: false, // Include all videos in report
      saveAllAttempts: false,
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
      videoCompression: false // Ensure no video compression
    },
    
    // Viewport Configuration
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    
    // Timeout Configuration
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 60000,
    
    // Retry Configuration
    retries: {
      runMode: 1,
      openMode: 0
    }
  },
});
