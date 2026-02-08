const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');

test('Check if homepage is loaded after login', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');

  const homePage = new HomePage(page);

  await page.waitForLoadState('domcontentloaded');

  await expect(homePage.homepage).toBeVisible();
  
});
