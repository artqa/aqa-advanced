import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io/',
    specPattern: 'cypress/e2e/**/**spec.js',
  },
});
