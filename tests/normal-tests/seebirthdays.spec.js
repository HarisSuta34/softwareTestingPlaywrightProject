const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const FriendsListPage = require('../../pages/friendslistpage');
const BirthdaysPage = require('../../pages/birthdayspage')

test('Check if homepage is loaded after login', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.facebook.com');

  const loginPage = new LoginPage(page);
  await loginPage.loginInToApplication();

  const homePage = new HomePage(page);
  await homePage.seeFriendsList();

  const friendslistpage = new FriendsListPage(page);
  await friendslistpage.seeBirthdays();

  const birthdaysPage = new BirthdaysPage(page);
  
  await page.waitForSelector(birthdaysPage.birthdaysPage);

  // Assert that the homepage element is visible
  await expect(page.locator(birthdaysPage.birthdaysPage)).toBeVisible();

  
});
