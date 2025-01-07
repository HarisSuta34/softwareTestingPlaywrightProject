const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const ProfilePage = require('../../pages/profilepage');

test('Create a post', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');

  const loginPage = new LoginPage(page);

  await loginPage.loginInToApplication();

  const homePage = new HomePage(page);

  // Wait for the homepage element to be visible
  await page.waitForSelector(homePage.homepage);

  // Assert that the homepage element is visible
  //await expect(page.locator(homePage.homepage)).toBeVisible();

  await homePage.goToProfilePage();

  const profilepage = new ProfilePage(page);

  await profilepage.createPost()

 
});
