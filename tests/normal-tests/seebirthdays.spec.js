const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');
const FriendsListPage = require('../../pages/friendslistpage');
const BirthdaysPage = require('../../pages/birthdayspage')

test('See birthdays of your friend', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');

  const homePage = new HomePage(page);
  await homePage.seeFriendsList();

  const friendslistpage = new FriendsListPage(page);
  await friendslistpage.seeBirthdays();

  const birthdaysPage = new BirthdaysPage(page);
  
  await page.waitForSelector(birthdaysPage.birthdaysPage);

  await expect(page.locator(birthdaysPage.birthdaysPage)).toBeVisible();

  
});
