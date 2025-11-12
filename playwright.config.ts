import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4323',
    headless: true
  },
  webServer: {
    command: 'npm run preview -- --port 4323',
    port: 4323,
    reuseExistingServer: true
  }
})
