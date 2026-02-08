const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');
 
test('Set your feeling (status)', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
 
  const homePage = new HomePage(page);
  await homePage.addFeeling();
 
});
