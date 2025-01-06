class NewGroupPage{

  constructor(page){
    this.page = page;
    this.groupNameInput="//span[contains(text(),'Group name')]";
    this.privacyDiv="//div[@class='xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xzsf02u x78zum5 x1jchvi3 x1fcty0u x132q4wb xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x1a8lsjc x1pi30zi x1swvt13 x9desvi x1n2onr6 x16tdsg8 xh8yej3 x1ja2u2z']"
    this.publicOption="//span[@class='x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xk50ysn xzsf02u x1yc453h'][normalize-space()='Public']"
    this.createButton="//div[@aria-label='Create']//div[@class='x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt']"
  }

  async create(){
    await this.page.fill(this.groupNameInput, "aloaloooorispektjesasastoo");
    await this.page.click(this.privacyDiv);
    await this.page.click(this.publicOption);
    await this.page.click(this.createButton);
    await this.page.waitForTimeout(3000);
  }

}

module.exports = NewGroupPage;