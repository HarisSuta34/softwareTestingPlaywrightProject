class LoginPage{

  constructor(page){
    this.page=page;
    this.email="//input[@id='email']";
    this.password="//input[@id='pass']";
    this.Button = "//button[contains(text(),'Log In')]";

  }

  async loginInToApplication(){
    await this.page.fill(this.email, "software.testing.22002255@gmail.com")
    await this.page.fill(this.password, "testiranje123")
    await this.page.click(this.Button)

  }

}

module.exports = LoginPage;