class HomePage {
  constructor(page, profileName = 'Rijad Hamidovic') {
    this.page = page;
    this.profileName = profileName;  // ✅ Dynamic profile name
    
    // Main homepage element - use for checking if logged in
    this.homepage = this.page.getByRole('main');
    
    // Logout
    this.menu = this.page.getByRole('button').filter({ has: this.page.locator('svg') }).first();
    this.logoutbutton = this.page.getByRole('menuitem', { name: /log out/i });
    
    // Navigation buttons - using new selectors
    this.friendsButton = this.page.getByRole('link', { name: 'Friends', exact: true });
    this.groupButton = this.page.getByRole('link', { name: 'Groups', exact: true });
    this.reelsButton = this.page.getByRole('link', { name: 'Reels', exact: true });
    
    // Search
    this.searchInput = this.page.getByLabel('Search Facebook');
    
    // Profile button - dynamic
    this.profilePageButton = this.page.getByRole('link').filter({ hasText: this.profileName });
    
    // Comments
    this.comment = this.page.locator("//p[@class='xdj266r x11i5rnm xat24cr x1mh8g0r']").first();
    this.commentButton = this.page.getByRole('button', { name: /comment/i });
    
    // Messages
    this.messengerButton = this.page.getByRole('link', { name: /messenger/i });
    this.chatIcon = this.page.getByRole('link').filter({ hasText: 'Haris Šuta' });
    this.chatInputField = this.page.locator("//p[@class='xat24cr xdj266r']");
    this.sendMessageButton = this.page.getByRole('button', { name: /send/i }).first();
    
    // Bio
    this.addBioButton = this.page.getByRole('button', { name: /add bio/i });
    this.bioText = this.page.getByPlaceholder('Describe who you are');
    this.saveBioButton = this.page.getByRole('button', { name: /save/i }).first();
    
    // Dark theme
    this.displayAndAccessibilityButton = this.page.getByRole('menuitem', { name: /display & accessibility/i });
    this.darkModeToggle = this.page.getByRole('switch', { name: /dark mode/i });
    
    // Reels/Video
    this.videoButton = this.page.getByRole('link', { name: 'Video', exact: true });
    
    // Feeling/Emoji
    this.feelingButton = this.page.getByRole('button', { name: /feeling|activity/i });
    this.happyEmojiButton = this.page.getByRole('button', { name: /happy/i }).first();
    this.postButton = this.page.getByRole('button', { name: /post/i }).first();
  }
  
  /**
   * Wait for homepage to be visible (checks if logged in)
   */
  async waitForHomepage(timeout = 30000) {
    await this.homepage.waitFor({ state: 'visible', timeout });
  }
  
  /**
   * Log out from Facebook
   */
  async logOutFromApplication() {
    await this.page.waitForTimeout(2000);
    await this.menu.click();
    await this.logoutbutton.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Navigate to profile page
   */
  async goToProfilePage() {
    await this.profilePageButton.click();
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Search for a user
   * @param {string} searchTerm - What to search for
   */
  async search(searchTerm = 'Binasa Goralija') {
    await this.searchInput.fill(searchTerm);
    await this.searchInput.press('Enter');
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Send a message
   * @param {string} message - Message to send
   */
  async sendMessage(message = 'Hi') {
    await this.messengerButton.click();
    await this.chatIcon.click();
    await this.chatInputField.fill(message);
    await this.sendMessageButton.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * View friends list
   */
  async seeFriendsList() {
    await this.friendsButton.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Click on groups button
   */
  async pressGroupButton() {
    await this.groupButton.click();
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Post a comment
   * @param {string} commentText - Text to comment
   */
  async sendComment(commentText = 'Test comment 2') {
    await this.goToProfilePage();
    await this.comment.fill(commentText);
    await this.commentButton.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Add or update bio
   * @param {string} bioText - Bio content
   */
  async addBio(bioText = 'Bio Proba') {
    await this.goToProfilePage();
    await this.addBioButton.click();
    await this.bioText.fill(bioText);
    await this.saveBioButton.click();
    await this.page.waitForTimeout(2000);
  }
  
  /**
   * Toggle dark mode
   */
  async toggleDarkMode() {
    await this.menu.click();
    await this.displayAndAccessibilityButton.click();
    await this.darkModeToggle.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Open reels
   */
  async openReels() {
    await this.reelsButton.click();
    await this.page.waitForTimeout(3000);
  }
  
  /**
   * Add feeling/emoji to post
   * @param {string} feeling - Feeling type
   */
  async addFeeling(feeling = 'happy') {
    await this.goToProfilePage();
    await this.feelingButton.click();
    await this.happyEmojiButton.click();
    await this.postButton.click();
    await this.page.waitForTimeout(3000);
  }
}

module.exports = HomePage;