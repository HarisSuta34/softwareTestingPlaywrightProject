const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');

test('Send message to your friend', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');

  const homePage = new HomePage(page);

  await homePage.sendMessage();

  
});
