const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

module.exports = async config => {
  const authFile = path.join(__dirname, 'auth.json');
  
  if (fs.existsSync(authFile)) {
    const stats = fs.statSync(authFile);
    const ageInHours = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60);
    if (ageInHours < 24) {
      console.log('�� Using existing auth session (less than 24 hours old)');
      return;
    }
  }

  console.log('🔐 Logging in to Facebook and saving session...');
  
  const browser = await chromium.launch({ headless: true });  // ✅ Changed to true
  
  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('📍 Going to Facebook...');
    await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });
    console.log('✅ Navigated to Facebook');

    console.log('⏳ Waiting for email field...');
    await page.waitForSelector("//input[@id='email']", { timeout: 10000 });
    console.log('✅ Email field found');

    const email = 'rijadhamidovic92@gmail.com';
    const password = 'rijad1234';

    console.log('✏️ Filling email...');
    await page.fill("//input[@id='email']", email);
    console.log('✅ Email filled');

    console.log('✏️ Filling password...');
    await page.fill("//input[@id='pass']", password);
    console.log('✅ Password filled');
    
    console.log('🖱️ Clicking login button...');
    await page.click("[data-testid='royal-login-button']");
    console.log('✅ Login button clicked');

    console.log('⏳ Waiting for page to load after login...');
    await page.waitForLoadState('networkidle', { timeout: 30000 });
    console.log('✅ Page loaded');

    console.log('⏳ Waiting a bit for dynamic content...');
    await page.waitForTimeout(3000);

    console.log('💾 Saving storage state...');
    await context.storageState({ path: authFile });
    console.log(`✅ Storage state saved to ${authFile}`);

    await context.close();

  } catch (error) {
    console.error('❌ Login failed:', error.message);
    console.error('Stack:', error.stack);
    throw error;
  } finally {
    await browser.close();
  }
};