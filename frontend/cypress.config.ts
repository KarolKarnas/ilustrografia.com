import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    // defaultCommandTimeout: 100000,
    // requestTimeout: 100000,
    baseUrl: "http://localhost:3000",
  },
  env: {
    BACKEND: 'http://localhost:5000/api'
  }
});
