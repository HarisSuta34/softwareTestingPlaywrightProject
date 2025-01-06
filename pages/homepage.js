class HomePage{
 
  constructor(page){
    this.page = page;
    this.menu= "//div[@class='x6s0dn4 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x14yjl9h xudhj91 x18nykt9 xww2gxu x13fuv20 x972fbf x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xl56j7k xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x6ikm8r x10wlt62 x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z']//*[name()='svg']";
    this.logoutbutton="//div[@data-nocookies='true']//div[@class='x6s0dn4 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r xeuugli x18d9i69 x1sxyh0 xurb0ha xexx8yu x1n2onr6 x1ja2u2z x1gg8mnh']"
    this.homepage="//span[@class='x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x14z4hjw x3x7a5m xngnso2 x1qb5hxa x1xlr1w8 xzsf02u']"
    
    this.profilePageButton="//span[contains(text(),'Faris Testirovic')]"
    this.comment ="//p[@class='xdj266r x11i5rnm xat24cr x1mh8g0r']";
    this.commentButton = "//div[@aria-label='Comment']";
    //this.storyMenu="//span[@class='x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j']//span//div[@aria-label='Menu']//*[name()='svg']"
    //this.storyButton="//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/a[1]/div[1]/div[1]/div[1]/i[1]"
    this.searchInput = "//input[@placeholder='Search Facebook']";

    this.friendsButton = "//span[contains(text(), 'Friends')]";

    this.messengerButton="//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[3]/span[1]";
    this.chatIcon="//span[contains(text(),'Haris Šuta')]";
    this.chatInputField="//p[@class='xat24cr xdj266r']";
    this.sendMessageButton="//*[name()='path' and contains(@d,'m458.371 1')]"
    
    this.callButton="//*[name()='path' and contains(@d,'M109.492 9')]"
    
    //create a group
    this.groupButton="//span[contains(text(),'Groups')]";

    //add bio
    this.Addbio = "//div[@aria-label='Add bio']//div[@class='x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt']";
    this.BioText = "//textarea[@placeholder='Describe who you are']";
    this.SendBio = "//span[@class='x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft'][normalize-space()='Save']"

    //dark theme
    this.DisplayDarkModeLabel = "//span[contains(text(),'Display & accessibility')]";
    this.DarkModeOnButton = "//input[@value='ENABLED']"

    //open reels
    this.VideoLogo = "//span[@class='x1lliihq x6ikm8r x10wlt62 x1n2onr6'][normalize-space()='Video']";
    this.ReelsLogo = "//a[@href='/reel/?s=bookmark']//div[@class='x6s0dn4 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r xeuugli x18d9i69 x1sxyh0 xurb0ha xexx8yu x1n2onr6 x1ja2u2z x1gg8mnh']//div[@class='x6s0dn4 xkh2ocl x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z']//div[@class='x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery xdt5ytf x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli xz9dl7a xsag5q8 x4uap5 xkhd6sd x1n2onr6 x1ja2u2z']";
  
    //post feeling
    this.emojilabel = "//div[@class='x1cy8zhl x78zum5 x1iyjqo2 xh8yej3']//div[@role='button']";
    this.emojilogo = "//div[@aria-label='Feeling/activity']//div//div//img[@class='x1b0d499 xl1xv1r']";
    this.happyemoji = "//div[contains(text(),'happy')]";
    this.postFeelingButton = "//div[@aria-label='Post']//div[@class='x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt']";
  } 
 
  async logOutFromApplication() {
    await this.page.waitForTimeout(5000);
    await this.page.click(this.menu);
    await this.page.waitForSelector(this.logoutbutton);
    await this.page.keyboard.press('Enter');
  }
 
  async goToProfilePage(){
    await this.page.waitForSelector(this.profilePageButton);
    await this.page.click(this.profilePageButton);
  }
 
  async goToStoryPage(){
    await this.page.waitForSelector(this.storyMenu);
    await this.page.click(this.storyMenu);
    await this.page.waitForSelector(this.storyButton);
    await this.page.click(this.storyButton);
  }
 
  async search() {
    await this.page.waitForSelector(this.searchInput);
    await this.page.fill(this.searchInput, "Binasa Goralija");
    await this.page.press(this.searchInput, 'Enter');
    await this.page.waitForTimeout(10000);
 
  }

  async sendMessage() {

    await this.page.click(this.messengerButton);
    await this.page.click(this.chatIcon);
    await this.page.fill(this.chatInputField, "Hi");
    await this.page.click(this.sendMessageButton);
    await this.page.waitForTimeout(3000);
  }

  async makeACall(){
    await this.page.click(this.messengerButton);
    await this.page.click(this.chatIcon);
    await page.waitForSelector(this.callButton);
    await expect(page.locator(this.callButton)).toBeVisible();
    await this.page.click(this.callButton);
  }

  async seeFriendsList(){
    await this.page.click(this.friendsButton);
    await this.page.waitForTimeout(5000);
  }

  async pressGroupButton(){
    await this.page.click(this.groupButton);
  }

  async SendaComment() {
      
    await this.page.click(this.profilePageButton);
    await this.page.waitForSelector(this.comment);
    await this.page.fill(this.comment, "Test comment 2")
    await this.page.click(this.commentButton);
    await this.page.waitForTimeout(5000);

  }

  async adBio() {
     
    await this.page.click(this.profilePageButton);
    await this.page.click(this.Addbio);
    await this.page.fill(this.BioText, "Bio Proba");
    await this.page.click(this.SendBio);
  }

  async changeLightModel() {
     
    await this.page.click(this.menu);
    await this.page.click(this.DisplayDarkModeLabel);
    await this.page.click(this.DarkModeOnButton);
    await this.page.waitForTimeout(5000);
  }

  async OpenReels() {
    await this.page.click(this.VideoLogo);
    await this.page.click(this.ReelsLogo);
    await this.page.waitForTimeout(5000);
  }

  async addFeeling() {
    await this.page.click(this.profilePageButton);
    await this.page.click(this.emojilabel);
    await this.page.click(this.emojilogo);
    await this.page.click(this.happyemoji);
    await this.page.click(this.postFeelingButton);
    await this.page.waitForTimeout(5000);

}
}
 
module.exports = HomePage;