const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');

test('Login to Facebook', async ({ page }) => {
  test.setTimeout(6000);
  await page.goto('https://www.facebook.com');

  const loginPage = new LoginPage(page);

  await loginPage.loginInToApplication();
  
});
