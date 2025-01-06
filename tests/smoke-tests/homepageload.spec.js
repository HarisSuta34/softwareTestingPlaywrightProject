const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');

test('Check if homepage is loaded after login', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');

  const loginPage = new LoginPage(page);
  await loginPage.loginInToApplication();

  const homePage = new HomePage(page);

  // Wait for the homepage element to be visible
  await page.waitForSelector(homePage.homepage);

  // Assert that the homepage element is visible
  await expect(page.locator(homePage.homepage)).toBeVisible();
  
});
