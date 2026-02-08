// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests sequentially to avoid concurrent login issues */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Sequential execution - 1 worker to avoid Facebook login conflicts */
  workers: 1,
  /* Global timeout for each test */
  timeout: 90000,
  /* Timeout for expect() assertions */
  expect: {
    timeout: 10000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
  ],
  
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.facebook.com',
    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Video on failure */
    video: 'retain-on-failure',
    /* Storage state - reuse authentication across tests */
    storageState: 'auth.json',
    /* Increased timeout for navigation and actions */
    navigationTimeout: 30000,
    actionTimeout: 15000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Global setup/teardown */
  globalSetup: require.resolve('./global-setup.js'),
  globalTeardown: require.resolve('./global-teardown.js'),
});