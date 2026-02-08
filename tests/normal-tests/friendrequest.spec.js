const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const SearchPage = require('../../pages/searchpage');
 
test('Send friend request', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
 
 
  const homePage = new HomePage(page);

  await page.waitForSelector(homePage.homepage, { timeout: 60000 }); // 60 seconds

  await homePage.search();

  const searchPage = new SearchPage(page);

  await searchPage.addFriend();
  
  
});
