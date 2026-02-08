class HomePage {
  constructor(page, profileName = 'Rijad Hamidovic') {
    this.page = page;
    this.profileName = profileName;  // ✅ Dynamic profile name
    
    // Main homepage element - use for checking if logged in
    this.homepage = this.page.getByRole('main');
    
    // Logout
    this.menu = this.page.getByRole('button').filter({ has: this.page.locator('svg') }).first();
    this.logoutbutton = this.page.getByRole('menuitem', { name: /log out/i });
    
    // Navigation buttons - using flexible selectors with fallbacks
    this.friendsButton = this.page.locator('a[href*="/friends"]').first();
    this.groupButton = this.page.locator('a[href*="/groups"]').first();
    this.reelsButton = this.page.locator('a[href*="/reel"]').first();
    
    // Search - more flexible selector
    this.searchInput = this.page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="Search"]').first();
    
    // Profile button - dynamic with fallback
    this.profilePageButton = this.page.locator(`a[href*="/${this.profileName.toLowerCase().replace(/\s+/g, '.')}"], a:has-text("${this.profileName}")`).first();
    
    // Comments - more flexible
    this.comment = this.page.locator('p[contenteditable="true"]').first();
    this.commentButton = this.page.getByRole('button', { name: /comment/i }).first();
    
    // Messages
    this.messengerButton = this.page.locator('a[href*="/messages"]').first();
    this.chatIcon = this.page.getByRole('link').filter({ hasText: 'Haris Šuta' }).first();
    this.chatInputField = this.page.locator('p[contenteditable="true"]').last();
    this.sendMessageButton = this.page.getByRole('button', { name: /send/i }).first();
    
    // Bio
    this.addBioButton = this.page.getByRole('button', { name: /add bio/i }).first();
    this.bioText = this.page.getByPlaceholder('Describe who you are').first();
    this.saveBioButton = this.page.getByRole('button', { name: /save/i }).first();
    
    // Dark theme
    this.displayAndAccessibilityButton = this.page.getByRole('menuitem', { name: /display & accessibility/i }).first();
    this.darkModeToggle = this.page.getByRole('switch', { name: /dark mode/i }).first();
    
    // Reels/Video
    this.videoButton = this.page.locator('a[href*="/watch"]').first();
    
    // Feeling/Emoji
    this.feelingButton = this.page.getByRole('button', { name: /feeling|activity/i }).first();
    this.happyEmojiButton = this.page.getByRole('button', { name: /happy/i }).first();
    this.postButton = this.page.getByRole('button', { name: /post/i }).first();
  }
  
  /**
   * Wait for homepage to be visible (checks if logged in)
   * Includes retry logic for dynamic content
   */
  async waitForHomepage(timeout = 30000) {
    try {
      await this.page.waitForLoadState('domcontentloaded', { timeout: timeout / 2 });
      await this.homepage.waitFor({ state: 'visible', timeout: timeout / 2 });
    } catch (error) {
      console.error('⚠️ Homepage wait failed:', error.message);
      // Try waiting for network idle as fallback
      await this.page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    }
  }

  /**
   * Safe click with wait - helper method for dynamic elements
   */
  async safeClick(locator, options = {}) {
    const timeout = options.timeout || 10000;
    try {
      await locator.waitFor({ state: 'visible', timeout });
      await locator.click({ timeout: 5000 });
      await this.page.waitForTimeout(1000); // Brief wait for action to complete
    } catch (error) {
      console.error(`⚠️ Safe click failed:`, error.message);
      throw error;
    }
  }

  /**
   * Safe fill with wait - helper method for input fields
   */
  async safeFill(locator, text, options = {}) {
    const timeout = options.timeout || 10000;
    try {
      await locator.waitFor({ state: 'visible', timeout });
      await locator.fill(text);
      await this.page.waitForTimeout(500); // Brief wait
    } catch (error) {
      console.error(`⚠️ Safe fill failed:`, error.message);
      throw error;
    }
  }
  
  /**
   * Log out from Facebook
   */
  async logOutFromApplication() {
    await this.page.waitForTimeout(2000);
    await this.safeClick(this.menu);
    await this.page.waitForTimeout(1000);
    await this.safeClick(this.logoutbutton);
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Navigate to profile page
   */
  async goToProfilePage() {
    await this.safeClick(this.profilePageButton);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Search for a user
   * @param {string} searchTerm - What to search for
   */
  async search(searchTerm = 'Binasa Goralija') {
    await this.safeFill(this.searchInput, searchTerm);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Send a message
   * @param {string} message - Message to send
   */
  async sendMessage(message = 'Hi') {
    await this.safeClick(this.messengerButton);
    await this.page.waitForLoadState('domcontentloaded');
    await this.safeClick(this.chatIcon);
    await this.safeFill(this.chatInputField, message);
    await this.safeClick(this.sendMessageButton);
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * View friends list
   */
  async seeFriendsList() {
    await this.safeClick(this.friendsButton);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Click on groups button
   */
  async pressGroupButton() {
    await this.safeClick(this.groupButton);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Post a comment
   * @param {string} commentText - Text to comment
   */
  async sendComment(commentText = 'Test comment 2') {
    await this.goToProfilePage();
    await this.safeFill(this.comment, commentText);
    await this.safeClick(this.commentButton);
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Add or update bio
   * @param {string} bioText - Bio content
   */
  async addBio(bioText = 'Bio Proba') {
    await this.goToProfilePage();
    await this.safeClick(this.addBioButton);
    await this.safeFill(this.bioText, bioText);
    await this.safeClick(this.saveBioButton);
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Toggle dark mode
   */
  async toggleDarkMode() {
    await this.safeClick(this.menu);
    await this.page.waitForTimeout(1000);
    await this.safeClick(this.displayAndAccessibilityButton);
    await this.page.waitForTimeout(1000);
    await this.safeClick(this.darkModeToggle);
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Open reels
   */
  async openReels() {
    await this.safeClick(this.reelsButton);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Add feeling/emoji to post
   * @param {string} feeling - Feeling type
   */
  async addFeeling(feeling = 'happy') {
    await this.goToProfilePage();
    await this.safeClick(this.feelingButton);
    await this.page.waitForTimeout(1000);
    await this.safeClick(this.happyEmojiButton);
    await this.safeClick(this.postButton);
    await this.page.waitForTimeout(2000);
  }
}

module.exports = HomePage;