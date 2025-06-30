const { chromium } = require('playwright');

async function analyzeWebsite() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set viewport for testing
  await page.setViewportSize({ width: 1200, height: 800 });
  
  try {
    console.log('🌐 Navigating to website...');
    await page.goto('http://localhost:1313', { waitUntil: 'networkidle' });
    
    // Take full page screenshot
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({ 
      path: 'full-page-desktop.png', 
      fullPage: true 
    });
    
    // Test mobile responsiveness
    console.log('📱 Testing mobile view...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: 'mobile-view.png', 
      fullPage: true 
    });
    
    // Test tablet view
    console.log('📱 Testing tablet view...');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: 'tablet-view.png', 
      fullPage: true 
    });
    
    // Back to desktop for analysis
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Analyze page content and structure
    console.log('🔍 Analyzing page structure...');
    
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);
    
    // Check for key elements
    const hasNav = await page.locator('nav').count() > 0;
    const hasHeader = await page.locator('header').count() > 0;
    const hasFooter = await page.locator('footer').count() > 0;
    const hasCTA = await page.locator('button, .btn, [role="button"]').count() > 0;
    
    console.log('Navigation present:', hasNav);
    console.log('Header present:', hasHeader);
    console.log('Footer present:', hasFooter);
    console.log('Call-to-action buttons:', hasCTA);
    
    // Check for common UX issues
    console.log('🚨 Checking for UX issues...');
    
    // Check for text contrast and readability
    const bodyText = await page.locator('body').innerHTML();
    const hasLargeBlocks = bodyText.length > 5000;
    console.log('Large content blocks detected:', hasLargeBlocks);
    
    // Check for loading performance
    const performance = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart
      };
    });
    
    console.log('Load performance:', performance);
    
    // Check accessibility basics
    const images = await page.locator('img').count();
    const imagesWithAlt = await page.locator('img[alt]').count();
    console.log(`Images: ${images}, with alt text: ${imagesWithAlt}`);
    
    // Check for headings structure
    const h1Count = await page.locator('h1').count();
    const h2Count = await page.locator('h2').count();
    const h3Count = await page.locator('h3').count();
    console.log(`Heading structure - H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count}`);
    
    // Test navigation between pages
    console.log('🔗 Testing navigation...');
    const navLinks = await page.locator('nav a, header a').all();
    
    for (let i = 0; i < Math.min(navLinks.length, 3); i++) {
      const link = navLinks[i];
      const href = await link.getAttribute('href');
      const text = await link.textContent();
      console.log(`Testing link: "${text}" -> ${href}`);
      
      if (href && href.startsWith('/')) {
        try {
          await link.click({ timeout: 5000 });
          await page.waitForLoadState('networkidle', { timeout: 5000 });
          const currentUrl = page.url();
          console.log(`✅ Successfully navigated to: ${currentUrl}`);
          
          // Take screenshot of subpage
          await page.screenshot({ 
            path: `page-${i + 1}.png`,
            fullPage: true 
          });
          
          // Go back to home
          await page.goto('http://localhost:1313');
        } catch (error) {
          console.log(`❌ Navigation failed for ${href}:`, error.message);
        }
      }
    }
    
    console.log('✅ Analysis complete! Check the generated screenshots.');
    
  } catch (error) {
    console.error('❌ Error during analysis:', error);
  } finally {
    await browser.close();
  }
}

analyzeWebsite().catch(console.error);