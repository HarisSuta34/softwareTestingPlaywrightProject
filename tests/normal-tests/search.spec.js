const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const SearchPage = require('../../pages/searchpage');

 
test('Log out from Facebook', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');
 
  const loginPage = new LoginPage(page);
  await loginPage.loginInToApplication();
 
  // Add a wait to ensure the page has fully loaded after login
  const homePage = new HomePage(page);
  

  await homePage.search();

  const searchPage = new SearchPage(page);
  await page.waitForSelector(searchPage.searchPage);

  // Assert that the homepage element is visible
  await expect(page.locator(searchPage.searchPage)).toBeVisible();
 
});
