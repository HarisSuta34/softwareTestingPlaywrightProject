const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');

test('Check if homepage is loaded after login', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');


  const homePage = new HomePage(page);

  await page.waitForSelector(homePage.homepage);

  await expect(page.locator(homePage.homepage)).toBeVisible();
  
});
