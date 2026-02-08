class FriendsListPage{

  constructor(page){
    this.page=page;
    // More flexible selector
    this.birthdaysButton = this.page.getByRole('link', { name: /birthdays/i }).first();
  }

  async seeBirthdays(){
    await this.birthdaysButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.birthdaysButton.click();
    await this.page.waitForTimeout(2000);
  }

}

module.exports = FriendsListPage;