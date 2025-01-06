class ProfilePage{
    

  constructor(page){
    this.page = page;
    this.postField="//div[@class='x1cy8zhl x78zum5 x1iyjqo2 xh8yej3']//span[@class='x1lliihq x6ikm8r x10wlt62 x1n2onr6']"
    this.postText="//p[@class='xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8']"
    this.postButton="//div[@aria-label='Post']//div[@class='x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt']"


  }

  async createPost(){
    await this.page.waitForSelector(this.postField);
    await this.page.click(this.postField);
    await this.page.fill(this.postText, "This is a test post")
    await this.page.click(this.postButton);
  }

}

module.exports = ProfilePage;