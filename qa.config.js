import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/**spec.{js,jsx,ts,tsx}',
        baseUrl: "https://qauto.forstudy.space"
    },env: {
        email: "octopus@sea.com",
        password: "Crusader1!"
    }
})