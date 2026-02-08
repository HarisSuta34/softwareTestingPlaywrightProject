class NewGroupPage{

  constructor(page){
    this.page = page;
    // More flexible selectors
    this.groupNameInput = this.page.locator('input[placeholder*="Group name"], input[aria-label*="Group name"]').first();
    this.privacyDiv = this.page.getByRole('button', { name: /privacy/i }).or(this.page.locator('div:has-text("Privacy")')).first();
    this.publicOption = this.page.getByRole('option', { name: /public/i }).or(this.page.locator('span:has-text("Public")')).first();
    this.createButton = this.page.getByRole('button', { name: /^create$/i }).first();
  }

  async create(){
    await this.groupNameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.groupNameInput.fill("aloaloooorispektjesasastoo");
    await this.page.waitForTimeout(1000);
    await this.privacyDiv.click();
    await this.page.waitForTimeout(1000);
    await this.publicOption.click();
    await this.page.waitForTimeout(1000);
    await this.createButton.click();
    await this.page.waitForTimeout(2000);
  }

}

module.exports = NewGroupPage;