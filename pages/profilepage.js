class ProfilePage{
    

  constructor(page){
    this.page = page;
    // More flexible selectors
    this.postField = this.page.locator('div[role="button"]:has-text("What\'s on your mind"), span:has-text("What\'s on your mind")').first();
    this.postText = this.page.locator('p[contenteditable="true"]').first();
    this.postButton = this.page.getByRole('button', { name: /^post$/i }).first();
  }

  async createPost(){
    await this.postField.waitFor({ state: 'visible', timeout: 10000 });
    await this.postField.click();
    await this.page.waitForTimeout(1000);
    await this.postText.fill("This is a test post");
    await this.page.waitForTimeout(1000);
    await this.postButton.click();
    await this.page.waitForTimeout(2000);
  }

}

module.exports = ProfilePage;