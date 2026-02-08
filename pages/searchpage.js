class SearchPage{

  constructor(page){
    this.page = page;
    // More flexible selectors
    this.searchPage = this.page.locator('div[role="main"], main').first();
    this.addFriendButton = this.page.getByRole('button', { name: /add friend/i }).first();
  }

  async addFriend(){
    await this.addFriendButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.waitForTimeout(2000);
    await this.addFriendButton.click();
    await this.page.waitForTimeout(2000);
  }

}

module.exports = SearchPage;