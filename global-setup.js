const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

module.exports = async config => {
  const authFile = path.join(__dirname, 'auth.json');
  
  if (fs.existsSync(authFile)) {
    const stats = fs.statSync(authFile);
    const ageInHours = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60);
    if (ageInHours < 24) {
      console.log('✅ Using existing auth session (less than 24 hours old)');
      return;
    }
    console.log('⚠️ Auth session is older than 24 hours, refreshing...');
  }

  console.log('🔐 Logging in to Facebook and saving session...');
  
  const browser = await chromium.launch({ headless: true });
  
  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    console.log('📍 Navigating to Facebook...');
    await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('✅ Page loaded');

    console.log('⏳ Waiting for login form...');
    await page.waitForSelector("input[id='email']", { timeout: 15000 });
    console.log('✅ Login form found');

    const email = 'rijadhamidovic92@gmail.com';
    const password = 'rijad1234';

    console.log('✏️ Entering credentials...');
    await page.fill("input[id='email']", email);
    await page.fill("input[id='pass']", password);
    console.log('✅ Credentials entered');
    
    console.log('🖱️ Clicking login button...');
    await page.click("[data-testid='royal-login-button']");
    console.log('✅ Login button clicked');

    console.log('⏳ Waiting for login to complete...');
    await page.waitForLoadState('networkidle', { timeout: 45000 });
    console.log('✅ Network idle');

    console.log('⏳ Waiting for homepage to load...');
    await page.waitForTimeout(5000);

    // Verify we're logged in by checking for main content
    const isLoggedIn = await page.locator('main').isVisible().catch(() => false);
    if (!isLoggedIn) {
      throw new Error('Login verification failed - homepage not visible');
    }
    console.log('✅ Login verified - homepage loaded');

    console.log('💾 Saving authentication state...');
    await context.storageState({ path: authFile });
    console.log(`✅ Auth state saved to ${authFile}`);

    await context.close();

  } catch (error) {
    console.error('❌ Login failed:', error.message);
    console.error('Stack:', error.stack);
    throw error;
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
};