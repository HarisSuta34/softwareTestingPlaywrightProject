const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const homepage = require('../../pages/homepage');
 
test('Set your feeling (status)', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');
 
  const loginPage = new LoginPage(page);
  await loginPage.loginInToApplication();
 
  // Add a wait to ensure the page has fully loaded after login
 
  const homePage = new homepage(page);
  await homePage.addFeeling();
 
});
