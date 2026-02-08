const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');

test('Log out from Facebook', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');

  // Already logged in via auth.json, just test logout
  const homePage = new HomePage(page);
  await homePage.logOutFromApplication();
  
});