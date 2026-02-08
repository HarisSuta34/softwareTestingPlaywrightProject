const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const homepage = require('../../pages/homepage');

test('Set a comment', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/');

  
  const homePage = new homepage(page);
  await homePage.SendaComment();
 
});


