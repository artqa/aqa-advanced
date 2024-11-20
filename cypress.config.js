import { defineConfig } from "cypress";

export default defineConfig({
  retries: { runMode: 0, openMode: 0 },
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  defaultCommandTimeout: 10000,
  viewportWidth: 1400,
  viewportHeight: 900,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    "overwrite": false,
    "html": false,
    "json": true
  },
  e2e: {
    specPattern: 'cypress/e2e/**/**spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      config.baseUrl = config.env.BASE_URL || 'https://qauto.forstudy.space'
      
      return config
    },
  },
});
