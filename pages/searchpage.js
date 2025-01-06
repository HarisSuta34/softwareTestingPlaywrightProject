class SearchPage{

  constructor(page){
    this.page = page;
    this.searchPage= "//div[@class='x9f619 x193iq5w x1miatn0 xqmdsaz x1gan7if x1xfsgkm']"
    this.addFriendButton="//div[@class='x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 x2lwn1j']//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[2]//div[2]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//div[1]//span[1]//span[1]"
  }

  async addFriend(){
    await this.page.waitForSelector(this.addFriendButton);
    await this.page.waitForTimeout(4000);
    await this.page.click(this.addFriendButton);
    await this.page.waitForTimeout(4000);
  }


}

module.exports = SearchPage;