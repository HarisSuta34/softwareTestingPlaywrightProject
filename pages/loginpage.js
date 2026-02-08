class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = "//input[@id='email']";
    this.password = "//input[@id='pass']";
    this.loginButton = "[data-testid='royal-login-button']";  // ✅ UPDATED
    this.homePageElement = "//span[@class='x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x14z4hjw x3x7a5m xngnso2 x1qb5hxa x1xlr1w8 xzsf02u']";
  }

  /**
   * Login to Facebook (mainly for manual/ad-hoc testing)
   * For automated test suites, use auth.json via global-setup.js
   */
  async loginInToApplication(email = 'rijadhamidovic92@gmail.com', password = 'rijad1234') {
    try {
      await this.page.fill(this.email, email);
      await this.page.fill(this.password, password);
      await this.page.click(this.loginButton);  // ✅ Uses updated selector
      
      // Wait for home page to load
      await this.page.waitForSelector(this.homePageElement, { timeout: 30000 });
      console.log('✅ Login successful');
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      throw error;
    }
  }
}

module.exports = LoginPage;