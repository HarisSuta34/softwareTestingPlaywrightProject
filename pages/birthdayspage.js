class BirthdaysPage{

  constructor(page){
    this.page = page;
    // More flexible selector - look for heading or main content
    this.birthdaysPage = this.page.locator('div[role="main"], main, h1:has-text("Birthdays"), h2:has-text("Birthdays")').first();
  }

}

module.exports = BirthdaysPage;