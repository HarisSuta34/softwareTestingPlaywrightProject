const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage');
const GroupCreationPage = require('../../pages/groupcreationpage');
const NewGroupPage = require('../../pages/newgrouppage');

test('Create new group', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/');

  const homePage = new HomePage(page);

  await homePage.pressGroupButton();

  const groupCreationPage= new GroupCreationPage(page);

  await groupCreationPage.createNewGroup();

  const newGroupPage = new NewGroupPage(page);

  await newGroupPage.create();


  
});
