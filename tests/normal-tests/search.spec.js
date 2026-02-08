const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const SearchPage = require('../../pages/searchpage');

 
test('Search functionality', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
 
  const homePage = new HomePage(page);
  

  await homePage.search();

  const searchPage = new SearchPage(page);
  await page.waitForSelector(searchPage.searchPage);

  await expect(page.locator(searchPage.searchPage)).toBeVisible();
 
});
