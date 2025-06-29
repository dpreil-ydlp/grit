# Grit GrowthOps Custom CSS Documentation

This directory contains custom CSS files that implement the Grit GrowthOps brand styling for the Hugo LoveIt theme.

## Files Overview

### `_override.scss`
Contains SCSS variable overrides for the LoveIt theme to implement brand colors and typography.

**Key Features:**
- Brand color palette definition
- Google Fonts integration (Space Grotesk + Inter)
- Theme color overrides for links, headers, and content

### `_custom.scss`
Main custom styling file with brand-specific components and base styles.

**Key Features:**
- CSS custom properties for brand colors
- Typography enhancements
- CTA button styling
- Form element styling
- Brand-specific component styles

### `_grit-components.scss`
Advanced component styling for complex UI elements.

**Key Features:**
- Multi-step form components
- Feature cards and testimonials
- Progress indicators
- Alert/notification styling
- Responsive design utilities

### `_grit-utilities.scss`
Utility classes for rapid UI development.

**Key Features:**
- Animation classes
- Layout utilities (flexbox, spacing)
- Text and display utilities
- Border and shadow utilities
- Responsive helpers

### `_grit-accessibility.scss`
Accessibility and print-friendly styles.

**Key Features:**
- Enhanced focus indicators
- High contrast mode support
- Reduced motion support
- Print-optimized styles
- Screen reader utilities

## Brand Colors

```scss
:root {
  --grit-primary: #FF6B35;      // Vibrant orange
  --grit-secondary: #2C3E50;    // Deep charcoal
  --grit-gray: #7F8C8D;         // Cool gray
  --grit-light-gray: #ECF0F1;   // Light gray
  --grit-white: #FFFFFF;        // White
}
```

## Typography

- **Headings**: Space Grotesk (Google Fonts)
- **Body Text**: Inter (Google Fonts)

## Key CSS Classes

### CTA Buttons
```html
<a href="#" class="btn-cta">Primary CTA</a>
<a href="#" class="btn-cta btn-secondary">Secondary CTA</a>
<a href="#" class="btn-cta btn-large">Large CTA</a>
```

### Form Elements
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" placeholder="Enter email">
</div>
```

### Feature Cards
```html
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </div>
</div>
```

### Utility Classes
```html
<!-- Layout -->
<div class="flex-center">Centered content</div>
<div class="flex-between">Space between</div>

<!-- Spacing -->
<div class="m-4 p-3">Margin and padding</div>

<!-- Text -->
<p class="text-center text-lg">Large centered text</p>

<!-- Colors -->
<span class="text-primary">Orange text</span>
<div class="bg-secondary">Dark background</div>
```

### Animations
```html
<div class="animate-fade-in">Fades in</div>
<div class="hover-lift">Lifts on hover</div>
<div class="animate-pulse">Pulsing animation</div>
```

## Usage in Hugo Templates

### In Layout Files
```html
<!-- Add CTA button -->
<a href="/contact" class="btn-cta btn-large">Get Started</a>

<!-- Feature grid -->
<div class="feature-grid">
  {{ range .Site.Data.features }}
  <div class="feature-card hover-lift">
    <div class="feature-icon">{{ .icon }}</div>
    <h3>{{ .title }}</h3>
    <p>{{ .description }}</p>
  </div>
  {{ end }}
</div>
```

### In Content Files
```markdown
{{< rawhtml >}}
<div class="cta-section">
  <h2>Ready to Grow Your Business?</h2>
  <p>Let's discuss how Grit GrowthOps can help you scale.</p>
  <a href="/contact" class="btn-cta">Schedule a Call</a>
</div>
{{< /rawhtml >}}
```

## Responsive Design

All components are designed to be responsive:
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid systems
- Touch-friendly interactive elements

## Accessibility Features

- High contrast mode support
- Reduced motion preferences
- Enhanced focus indicators
- Screen reader friendly
- Print-optimized styles
- Keyboard navigation support

## Dark Mode Support

All custom styles include dark mode variants that work with the theme's dark mode toggle.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 with graceful degradation
- Mobile browsers (iOS Safari, Android Chrome)

## Customization

To customize colors, modify the CSS custom properties in `_override.scss`:

```scss
$grit-primary: #YOUR_COLOR;
$grit-secondary: #YOUR_COLOR;
```

Or override the CSS custom properties:

```css
:root {
  --grit-primary: #YOUR_COLOR;
}
```