const { chromium } = require('playwright');

async function testSidebarFix() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Test pages
  const pages = [
    { name: 'homepage', path: '/' },
    { name: 'about', path: '/about/' },
    { name: 'services', path: '/services/' },
    { name: 'contact', path: '/contact/' }
  ];

  console.log('Testing emergency sidebar fixes...\n');

  for (const testPage of pages) {
    console.log(`Testing ${testPage.name}...`);
    
    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`http://localhost:1313${testPage.path}`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Take desktop screenshot
    await page.screenshot({ 
      path: `screenshots/${testPage.name}-desktop-fixed.png`,
      fullPage: true 
    });

    // Check for white sidebars
    const bodyBg = await page.evaluate(() => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      return computedStyle.backgroundColor;
    });

    const mainBg = await page.evaluate(() => {
      const main = document.querySelector('main');
      if (main) {
        const computedStyle = window.getComputedStyle(main);
        return computedStyle.backgroundColor;
      }
      return null;
    });

    const wrapperWidth = await page.evaluate(() => {
      const wrapper = document.querySelector('.wrapper');
      if (wrapper) {
        const computedStyle = window.getComputedStyle(wrapper);
        return {
          width: computedStyle.width,
          maxWidth: computedStyle.maxWidth,
          margin: computedStyle.margin
        };
      }
      return null;
    });

    console.log(`  Body background: ${bodyBg}`);
    console.log(`  Main background: ${mainBg}`);
    console.log(`  Wrapper styles:`, wrapperWidth);

    // Check for visible white areas
    const whiteAreas = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const whiteElements = [];
      
      for (const el of elements) {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        
        // Check if background is white or very light
        if (bg === 'rgb(255, 255, 255)' || bg === 'rgba(255, 255, 255, 1)' ||
            bg === 'rgb(248, 249, 250)' || bg === 'rgb(236, 240, 241)') {
          const rect = el.getBoundingClientRect();
          if (rect.width > 100 && rect.height > 50) { // Only significant elements
            whiteElements.push({
              tag: el.tagName,
              class: el.className,
              id: el.id,
              width: rect.width,
              height: rect.height,
              bg: bg
            });
          }
        }
      }
      
      return whiteElements;
    });

    if (whiteAreas.length > 0) {
      console.log(`  ⚠️  Found ${whiteAreas.length} white/light elements:`);
      whiteAreas.slice(0, 5).forEach(el => {
        console.log(`     - ${el.tag}${el.id ? '#' + el.id : ''}${el.class ? '.' + el.class : ''} (${Math.round(el.width)}x${Math.round(el.height)}px) - ${el.bg}`);
      });
    } else {
      console.log(`  ✓ No significant white areas found`);
    }

    // Mobile view
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);
    
    // Take mobile screenshot
    await page.screenshot({ 
      path: `screenshots/${testPage.name}-mobile-fixed.png`,
      fullPage: true 
    });

    // Check mobile layout
    const mobileWrapperWidth = await page.evaluate(() => {
      const wrapper = document.querySelector('.wrapper');
      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();
        return {
          width: rect.width,
          viewportWidth: window.innerWidth,
          isFullWidth: rect.width >= window.innerWidth - 2
        };
      }
      return null;
    });

    console.log(`  Mobile wrapper:`, mobileWrapperWidth);
    console.log('');
  }

  // Final summary
  console.log('\n=== EMERGENCY FIX VERIFICATION ===');
  console.log('Screenshots saved to screenshots/ directory');
  console.log('Please check:');
  console.log('1. No white sidebars on left/right');
  console.log('2. Full-width dark background');
  console.log('3. Content properly centered without massive margins');
  console.log('4. Mobile responsiveness');

  await browser.close();
}

// Create screenshots directory
const fs = require('fs');
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

testSidebarFix().catch(console.error);