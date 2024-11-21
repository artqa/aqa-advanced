import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/**spec.{js,jsx,ts,tsx}',
        baseUrl: "https://qauto2.forstudy.space"
    },env: {
        email: "beetle@sky.com",
        password: "Crusader2!"
    }
})