const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const HomePage = require('../../pages/homepage');
const ProfilePage = require('../../pages/profilepage');

test('Create a post', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');


  const homePage = new HomePage(page);

  await page.waitForSelector(homePage.homepage);


  await homePage.goToProfilePage();

  const profilepage = new ProfilePage(page);

  await profilepage.createPost()

 
});
