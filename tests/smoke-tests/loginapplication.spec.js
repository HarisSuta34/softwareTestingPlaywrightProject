const { test, expect } = require('@playwright/test');

test('Verify stored session works', async ({ page }) => {
  test.setTimeout(6000);
  
  // Just verify we can access the app with stored auth
  await page.goto('/');
  
  // Check if we're already logged in by looking for homepage element
  const homePageElement = "//span[@class='x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x14z4hjw x3x7a5m xngnso2 x1qb5hxa x1xlr1w8 xzsf02u']";
  
  await expect(page.locator(homePageElement)).toBeVisible({ timeout: 10000 });
});