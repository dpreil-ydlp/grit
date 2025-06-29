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

## Custom Styling for Grit GrowthOps

### CSS Variables
```css
:root {
  --primary-color: #FF6B35;
  --primary-dark: #E55A2B;
  --secondary-color: #2C3E50;
  --text-dark: #2C3E50;
  --text-light: #7F8C8D;
  --background-light: #ECF0F1;
  --white: #FFFFFF;
  
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Key Style Components
- **CTA Buttons**: Orange background with hover animations
- **Forms**: Branded styling with focus states
- **Typography**: Space Grotesk for headings, Inter for body text
- **Color Scheme**: Orange primary, charcoal secondary, clean whites/grays

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

## Testing Strategy

The theme includes an `exampleSite/` that demonstrates all features and serves as both documentation and testing environment. Use the hugo-server commands to test changes against the example site.

## Multilingual Support

The theme supports 20+ languages with complete translations in `i18n/`. When adding new strings, ensure they're added to all language files or provide fallbacks to English.