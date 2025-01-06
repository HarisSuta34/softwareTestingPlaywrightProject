class FriendsListPage{

  constructor(page){
    this.page=page;
    this.birthdaysButton="//span[contains(text(), 'Birthdays')]";
  }

  async seeBirthdays(){
    await this.page.click(this.birthdaysButton);
  }

}

module.exports = FriendsListPage;