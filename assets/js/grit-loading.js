// Grit GrowthOps Loading States & Skeleton Screens

(function() {
  'use strict';

  // Skeleton Screen Templates
  const SkeletonTemplates = {
    card: `
      <div class="skeleton-card">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text" style="width: 80%;"></div>
        <div class="skeleton skeleton-button"></div>
      </div>
    `,
    
    hero: `
      <div class="skeleton-hero">
        <div class="skeleton skeleton-title" style="width: 80%; height: 60px; margin: 0 auto 20px;"></div>
        <div class="skeleton skeleton-text" style="width: 60%; margin: 0 auto 20px;"></div>
        <div class="skeleton skeleton-button" style="margin: 0 auto;"></div>
      </div>
    `,
    
    form: `
      <div class="skeleton-form">
        <div class="skeleton skeleton-text" style="width: 30%; height: 20px; margin-bottom: 10px;"></div>
        <div class="skeleton skeleton-text" style="width: 100%; height: 40px; margin-bottom: 20px;"></div>
        <div class="skeleton skeleton-text" style="width: 30%; height: 20px; margin-bottom: 10px;"></div>
        <div class="skeleton skeleton-text" style="width: 100%; height: 40px; margin-bottom: 20px;"></div>
        <div class="skeleton skeleton-button"></div>
      </div>
    `
  };

  // Loading States Manager
  class LoadingManager {
    constructor() {
      this.loadingElements = new Map();
      this.init();
    }

    init() {
      this.createPageLoader();
      this.setupFormLoading();
      this.setupImageLoading();
    }

    // Create full page loader
    createPageLoader() {
      const loader = document.createElement('div');
      loader.id = 'page-loader';
      loader.innerHTML = `
        <div class="loader-content">
          <div class="loader-logo">
            <div class="grit-letters">
              <span class="grit-letter animate-letter" style="animation-delay: 0s;">G</span>
              <span class="grit-letter animate-letter" style="animation-delay: 0.1s;">R</span>
              <span class="grit-letter animate-letter" style="animation-delay: 0.2s;">I</span>
              <span class="grit-letter animate-letter" style="animation-delay: 0.3s;">T</span>
            </div>
            <div class="loader-tagline">Scale Your Grit</div>
          </div>
          <div class="loader-progress">
            <div class="loader-bar"></div>
          </div>
        </div>
      `;
      
      // Add styles
      const loaderStyles = `
        #page-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2C3E50 0%, #1A252F 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        #page-loader.hidden {
          opacity: 0;
          visibility: hidden;
        }
        
        .loader-content {
          text-align: center;
          color: white;
        }
        
        .grit-letters {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .grit-letter {
          font-size: 3rem;
          font-weight: 700;
          color: #FF6B35;
          opacity: 0;
          transform: translateY(30px);
          animation: letterDrop 0.6s ease-out forwards;
        }
        
        @keyframes letterDrop {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .loader-tagline {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 30px;
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .loader-progress {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }
        
        .loader-bar {
          height: 100%;
          background: linear-gradient(90deg, #FF6B35, #E55A2B);
          width: 0%;
          animation: loadProgress 2s ease-out forwards;
        }
        
        @keyframes loadProgress {
          to {
            width: 100%;
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `;
      
      const styleSheet = document.createElement('style');
      styleSheet.textContent = loaderStyles;
      document.head.appendChild(styleSheet);
      
      document.body.appendChild(loader);
      
      // Hide loader when page is loaded
      window.addEventListener('load', () => {
        setTimeout(() => {
          loader.classList.add('hidden');
          setTimeout(() => {
            loader.remove();
          }, 500);
        }, 1000);
      });
    }

    // Setup form loading states
    setupFormLoading() {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          this.showFormLoading(form);
          
          // Simulate loading time for demo
          setTimeout(() => {
            this.hideFormLoading(form);
          }, 2000);
        });
      });
    }

    showFormLoading(form) {
      const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <span class="loading-spinner"></span>
          Sending...
        `;
        submitButton.classList.add('loading');
      }
    }

    hideFormLoading(form) {
      const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = `
          Get Your Growth Roadmap
          <span class="arrow-right"></span>
        `;
        submitButton.classList.remove('loading');
      }
    }

    // Setup image loading with skeleton
    setupImageLoading() {
      const images = document.querySelectorAll('img[data-src]');
      
      images.forEach(img => {
        this.loadImageWithSkeleton(img);
      });
    }

    loadImageWithSkeleton(img) {
      // Create skeleton placeholder
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton image-skeleton';
      skeleton.style.width = img.getAttribute('width') || '100%';
      skeleton.style.height = img.getAttribute('height') || '200px';
      
      img.parentNode.insertBefore(skeleton, img);
      img.style.display = 'none';
      
      // Load actual image
      const actualImg = new Image();
      actualImg.onload = () => {
        img.src = actualImg.src;
        img.style.display = 'block';
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
          img.style.opacity = '1';
          skeleton.remove();
        }, 100);
      };
      
      actualImg.src = img.getAttribute('data-src');
    }

    // Show skeleton for any element
    showSkeleton(element, template = 'card') {
      if (this.loadingElements.has(element)) return;
      
      const originalContent = element.innerHTML;
      this.loadingElements.set(element, originalContent);
      
      element.innerHTML = SkeletonTemplates[template] || SkeletonTemplates.card;
      element.classList.add('loading-state');
    }

    // Hide skeleton and restore content
    hideSkeleton(element) {
      if (!this.loadingElements.has(element)) return;
      
      const originalContent = this.loadingElements.get(element);
      element.innerHTML = originalContent;
      element.classList.remove('loading-state');
      this.loadingElements.delete(element);
    }

    // Show loading state for button
    showButtonLoading(button, text = 'Loading...') {
      if (button.classList.contains('loading')) return;
      
      const originalContent = button.innerHTML;
      button.setAttribute('data-original-content', originalContent);
      
      button.innerHTML = `
        <span class="loading-spinner"></span>
        ${text}
      `;
      button.classList.add('loading');
      button.disabled = true;
    }

    // Hide button loading
    hideButtonLoading(button) {
      if (!button.classList.contains('loading')) return;
      
      const originalContent = button.getAttribute('data-original-content');
      button.innerHTML = originalContent;
      button.classList.remove('loading');
      button.disabled = false;
      button.removeAttribute('data-original-content');
    }
  }

  // Add loading spinner styles
  const spinnerStyles = `
    .loading-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-right: 8px;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    .loading-state {
      pointer-events: none;
    }
    
    .btn-primary.loading {
      background: #7F8C8D;
      cursor: not-allowed;
    }
    
    .btn-primary.loading:hover {
      transform: none;
      box-shadow: none;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = spinnerStyles;
  document.head.appendChild(styleSheet);

  // Initialize loading manager
  const loadingManager = new LoadingManager();

  // Export for global use
  window.GritLoading = loadingManager;

})();