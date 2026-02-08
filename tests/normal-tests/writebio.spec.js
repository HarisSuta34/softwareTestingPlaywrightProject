const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const homepage = require('../../pages/homepage');
 
test('Update biography', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
 
 
 
  const homePage = new homepage(page);
  await homePage.adBio();
  
});
