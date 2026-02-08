class GroupCreationPage{

  constructor(page){
    this.page=page;
    this.creatGroupPage = this.page.locator('div[role="main"], main').first();
    this.createNewGroupButton = this.page.getByRole('link', { name: /create new group/i }).or(this.page.locator('span:has-text("Create New Group")')).first();
  }


  async createNewGroup(){
    await this.createNewGroupButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.createNewGroupButton.click();
    await this.page.waitForTimeout(2000);
  }
}

module.exports=GroupCreationPage;