const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');
const SearchPage = require('../../pages/searchpage');
 
test('Send friend request', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
 
  const homePage = new HomePage(page);

  await page.waitForLoadState('domcontentloaded');

  await homePage.search();

  const searchPage = new SearchPage(page);

  await searchPage.addFriend();
  
  
});
