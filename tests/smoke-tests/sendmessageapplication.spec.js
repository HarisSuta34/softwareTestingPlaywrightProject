const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');

test('Login to Facebook and send message', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');

  const loginPage = new LoginPage(page);

  await loginPage.loginInToApplication();

  const homePage = new HomePage(page);

  await homePage.sendMessage();

  
});
