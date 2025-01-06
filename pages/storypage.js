class StoryPage{


  constructor(page){
    this.page=page;
    this.textStory="//div[contains(text(),'Create a text story')]"
    this.textInput="//textarea[@id=':rfr:']"
    this.postStoryButton="//span[contains(text(),'Share to story')]"

  }

  async createTextStory() {
    //await this.page.waitForSelector(this.textStory);
    await this.page.click(this.textStory);
    //await this.page.waitForSelector(this.textInput);
    await this.page.fill(this.textInput, "This is a test story");
    //await this.page.waitForSelector(this.postStoryButton);
    await this.page.click(this.postStoryButton);
  }


}
module.exports = StoryPage;