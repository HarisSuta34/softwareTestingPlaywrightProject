const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');

test('Set a comment', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/');
  
  const homePage = new HomePage(page);
  await homePage.sendComment();
 
});

