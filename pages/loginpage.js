class LoginPage{

  constructor(page){
    this.page=page;
    this.email="//input[@id='email']";
    this.password="//input[@id='pass']";
    this.Button = "//button[contains(text(),'Log In')]";

  }

  async loginInToApplication(){
    await this.page.fill(this.email, "rijadhamidovic92@gmail.com")
    await this.page.fill(this.password, "rijad1234")
    await this.page.click(this.Button)

  }

}

module.exports = LoginPage;