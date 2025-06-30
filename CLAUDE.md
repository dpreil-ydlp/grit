# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the **LoveIt** Hugo theme being used to build a professional website for **Grit GrowthOps** - an operational consulting firm that helps first-time founders with 2-4 employees scale efficiently. The theme is being customized to create a conversion-focused site targeting overwhelmed founders.

### Grit GrowthOps Website Goals
- Convert overwhelmed founders into leads by demonstrating our unique approach
- Target audience: First-time founders with 2-4 employees, $500K-$3M ARR
- Core methodology: The GRIT Framework (Growth, Role-alignment, Integrated automation, Tactical planning)
- Brand voice: Direct, practical, founder-to-founder communication

### Key Brand Elements
- **Colors**: Deep Charcoal (#2C3E50), Vibrant Orange (#FF6B35), Cool Gray (#7F8C8D)
- **Typography**: Clean sans-serif (Inter, Space Grotesk)
- **Tagline**: "Scale Your Grit"
- **Design Style**: Clean, professional, modern but approachable

## Development Commands

### Hugo Development
```bash
# Start development server with example site and drafts
npm run hugo-server

# Start development server in development environment
npm run hugo-server-development

# Start production server with minification
npm run hugo-server-production

# Build site (development)
npm run hugo-development

# Build site (production)
npm run hugo-production

# Build basic site with drafts
npm run hugo
```

### Asset Compilation
```bash
# Compile JavaScript theme assets
npm run compile

# Compile Lunr.js segmentation library for Chinese text search
npm run compile-lunr-segmentit

# Copy generated resources
npm run copy-resources
```

### Testing & Quality
```bash
# HTML validation (after building)
npm run htmlproofer
```

## Architecture Overview

### Theme Structure
- **`layouts/`** - Hugo templates organized by content type and partials
  - `_default/` - Base templates (baseof.html, single.html, section.html)
  - `partials/` - Reusable template components (header, footer, functions)
  - `shortcodes/` - Custom Hugo shortcodes for enhanced content
- **`assets/`** - Source assets that get processed by Hugo
  - `css/` - SCSS stylesheets with modular architecture
  - `js/` - JavaScript source files
  - `lib/` - Third-party libraries and assets
  - `data/` - Configuration data (CDN, social icons, etc.)
- **`i18n/`** - Internationalization files for 20+ languages
- **`exampleSite/`** - Demo site showing theme capabilities

### CSS Architecture
The theme uses a modular SCSS structure:
- `_core/` - Base styles, layout, header, footer
- `_page/` - Page-specific styles (home, single, archive)
- `_partial/` - Component styles (toc, comments, code blocks)
- `_mixin/` - Reusable SCSS mixins
- `style.scss` - Main entry point that imports all modules

## Grit GrowthOps Website Structure

### Required Pages
1. **Homepage** - Hero section, problem/solution, GRIT Framework, founder story, CTA
2. **Services** - Comprehensive operational transformation details  
3. **About** - Founder story and mission
4. **Contact** - Lead capture form with qualification questions

### Key Features to Implement
- **Contact Form**: Netlify Forms with qualification questions (team size, revenue, founder type)
- **Brand Colors**: Custom CSS using primary orange (#FF6B35) and charcoal (#2C3E50)
- **CTA Strategy**: All elements drive to contact form conversion
- **Mobile Responsive**: Fast load times, optimized for conversion

### Content Strategy
- Headlines targeting founder pain points
- Specific value propositions (20+ hours back per week)
- Trust builders (concrete experience and results)
- Founder-to-founder empathetic tone

### Asset Pipeline
1. Source files in `src/` are compiled to `assets/`
2. Hugo processes assets during build
3. Third-party libraries are maintained in `assets/lib/`
4. CDN configuration allows external hosting of assets

### Key Features Architecture
- **Search**: Lunr.js with language-specific tokenizers
- **Themes**: CSS custom properties for light/dark mode switching  
- **Shortcodes**: Custom Hugo shortcodes for charts, math, media embeds
- **Comments**: Multiple system integrations (Disqus, Gitalk, Giscus, etc.)
- **Internationalization**: Complete i18n support with language switching

## Configuration System

The theme uses Hugo's configuration system with extensive customization options in `hugo.toml`. Key configuration sections:
- `params.author` - Author information
- `params.header/footer` - Site navigation and footer
- `params.page` - Global page settings (TOC, code highlighting, math)
- `params.social` - Social media links (80+ platforms supported)
- `params.search` - Search engine configuration
- `params.analytics` - Multiple analytics providers

## Modern UI Design System (2025)

### Complete Brand Transformation ✅
**Status**: Fully implemented professional UI overhaul with critical fixes (Commit: 6086ced2)
- Transformed from clunky emoji-heavy design to sleek, conversion-focused interface
- Eliminated white nav bar and blue hero section issues
- Implemented premium glass-morphism navigation and modern component system
- **CRITICAL FIX**: Resolved hero content loading issue for immediate visibility
- **NAVIGATION FIX**: Removed parentheses, theme switch, search - clean navigation only
- **LAYOUT FIX**: Eliminated massive white space gaps and weird box styling
- **CONVERSION READY**: Website now properly displays all content and converts visitors

### CSS Architecture & Design Tokens
```css
:root {
  /* Primary Brand Colors */
  --grit-charcoal: #2C3E50;     /* Primary backgrounds, headers */
  --grit-orange: #FF6B35;       /* CTAs, accents, energy */
  --grit-orange-dark: #E55A2B;  /* Hover states, gradients */
  
  /* Supporting Palette */
  --grit-gray-cool: #7F8C8D;    /* Body text, secondary content */
  --grit-gray-light: #ECF0F1;   /* Backgrounds, subtle dividers */
  --grit-white: #FFFFFF;        /* Clean space, cards */
  
  /* Advanced Typography System */
  --font-heading: 'Space Grotesk', sans-serif;  /* Modern geometric */
  --font-body: 'Inter', sans-serif;             /* Readable, professional */
  
  /* Responsive Type Scale */
  --text-hero: clamp(2.5rem, 6vw, 4rem);       /* Hero headlines */
  --text-h1: 2.5rem;                           /* Page titles */
  --text-h2: 2rem;                             /* Section headers */
  --text-body: 1.125rem;                       /* Optimized body text */
  
  /* Modern Spacing System (8px grid) */
  --space-xs: 0.5rem;   --space-sm: 1rem;     --space-md: 1.5rem;
  --space-lg: 2rem;     --space-xl: 3rem;     --space-2xl: 4rem;
  
  /* Professional Animation System */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 200ms;  --duration-normal: 300ms;  --duration-slow: 500ms;
}
```

### Modern Component System
**Glass-Morphism Navigation**
- Sophisticated dark charcoal with 95% opacity + backdrop blur
- Subtle orange accent borders and professional hover states
- Mobile-optimized hamburger menu with smooth transitions

**Hero Section Redesign**
- Eliminated blue background → Multi-layer charcoal gradients (135deg)
- Animated background patterns with floating elements
- Gradient text effects with CSS background-clip for orange accents
- Professional typography with clamp() for responsive scaling

**Interactive Card System**
- Modern 16px border radius with subtle shadow layers
- 3D hover animations with 8px lift and scale transforms
- Progressive enhancement: border → background → icon color changes
- Staggered animation delays for visual hierarchy

**Premium CTA Buttons**
- Gradient backgrounds (135deg) with ripple click effects
- Advanced hover states: lift + scale + shadow enhancement
- Arrow icons with bounce animations on interaction
- Touch-friendly sizing (min-height: 56px) for mobile

**GRIT Framework Visual**
- Interactive 4-column grid with sophisticated hover states
- 3D transforms: translateY(-12px) + scale(1.05) + z-index layering
- Gradient letter effects with font-weight: 800 for impact
- Mobile-responsive: 4→2→1 columns with adaptive spacing

### Advanced Responsive Strategy
**Mobile-First Implementation**
```css
/* Base: 320px+ */        /* Tablet: 768px+ */        /* Desktop: 1024px+ */
- Single column layout    - 2-column grids           - Multi-column layouts  
- Touch-friendly (48px+)  - Expanded hover states    - Advanced animations
- Simplified navigation   - Progressive enhancement  - Full visual effects
```

**Performance Optimizations**
- `prefers-reduced-motion` accessibility compliance
- Hardware acceleration for smooth 60fps animations
- Optimized CSS custom properties for theme consistency
- Lazy-loaded decorative elements to improve Core Web Vitals

### Accessibility & Usability
- **Focus Management**: 3px orange outline with 2px offset for keyboard navigation
- **Screen Reader Support**: Semantic HTML5 structure with proper ARIA labels
- **Color Contrast**: WCAG AA compliant ratios (4.5:1 minimum)
- **Touch Targets**: Minimum 44px for mobile interaction comfort
- **Skip Links**: Hidden navigation for assistive technology users

### Conversion Optimization Features
- **Above-the-fold CTA**: Hero section with prominent "Get Your Growth Roadmap" button
- **Social Proof Integration**: Metric cards with animated counters (25+ hours, 90% reduction)
- **Founder Story Section**: Personal narrative with emotional connection points
- **Progressive Disclosure**: Information architecture that builds trust before conversion
- **Mobile Conversion Path**: Streamlined single-column flow with persistent CTAs

## Technical Requirements

### Netlify Integration
- Configure Netlify Forms for contact form
- Ensure honeypot protection is implemented  
- Set up form notifications and data collection

### SEO Optimization
- Custom meta descriptions for all pages
- Structured data for business information
- Open Graph tags for social sharing
- Fast load times (under 3 seconds)
- Mobile-first responsive design

## Development & Testing Strategy

### Local Development Setup
```bash
# Primary development server (recommended)
hugo server --source . --buildDrafts --disableFastRender --environment development --port 1314

# Alternative: Example site testing  
cd exampleSite && hugo server --buildDrafts --disableFastRender --environment development --port 1315

# Production build testing
npm run hugo-production
```

### Modern UI Quality Assurance ✅
**Completed Transformations (2025)**
1. ✅ **Navigation Overhaul**: White nav → Glass-morphism dark navigation
2. ✅ **Hero Section Redesign**: Blue background → Sophisticated charcoal gradients  
3. ✅ **Component Modernization**: Basic cards → Interactive 3D hover system
4. ✅ **Button Enhancement**: Simple CTAs → Premium gradient buttons with ripple effects
5. ✅ **Responsive Optimization**: Desktop-first → Mobile-first with progressive enhancement
6. ✅ **Performance**: 60fps animations with reduced-motion accessibility
7. ✅ **Brand Consistency**: Grit orange (#FF6B35) + charcoal (#2C3E50) throughout

### Frontend Rebuild & Critical Fixes (2025) ✅
**Final Status**: Website fully functional and conversion-ready (Commit: 6086ced2)
1. ✅ **Hero Content Loading**: Fixed critical issue where hero headline and CTA weren't visible
2. ✅ **Navigation Cleanup**: Removed parentheses, theme switch, search for clean interface
3. ✅ **Layout Spacing**: Eliminated massive white space gaps and weird box styling
4. ✅ **Animation Performance**: Removed animation delays blocking immediate content visibility
5. ✅ **Cross-Device Testing**: Verified with Puppeteer across desktop, tablet, mobile
6. ✅ **Conversion Optimization**: Immediate visibility of value proposition and CTAs
7. ✅ **Production Ready**: Live at https://gritgrowthops.netlify.app with full functionality

### Testing Environments
- **Development**: `exampleSite/` with live reload and draft content
- **Production**: Minified builds with CDN optimization  
- **Mobile Testing**: Responsive breakpoints from 320px to 4K displays
- **Accessibility**: Screen reader testing and keyboard navigation validation

## Multilingual Support

The theme supports 20+ languages with complete translations in `i18n/`. When adding new strings, ensure they're added to all language files or provide fallbacks to English.