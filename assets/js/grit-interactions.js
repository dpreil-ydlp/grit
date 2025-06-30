// Grit GrowthOps Premium Interactions & Animations

(function() {
  'use strict';

  // Scroll Progress Indicator
  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.querySelector('.scroll-progress-bar').style.width = progress + '%';
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
  }

  // Intersection Observer for Scroll Animations
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-up, .fade-left, .fade-right, .fade-scale, .stagger-container');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // Parallax Scrolling
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax, .parallax-slow');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.3 : 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Smooth Scroll for Anchor Links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Magnetic Button Effect
  function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic-button, .btn-primary');
    
    magneticButtons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.setProperty('--mouse-x', `${x * 0.2}px`);
        button.style.setProperty('--mouse-y', `${y * 0.2}px`);
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.setProperty('--mouse-x', '0px');
        button.style.setProperty('--mouse-y', '0px');
      });
    });
  }

  // Form Input Animations
  function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
      group.classList.add('form-group-animated');
      
      const input = group.querySelector('input, select, textarea');
      if (input) {
        // Add floating label effect
        input.addEventListener('focus', () => {
          group.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
          if (!input.value) {
            group.classList.remove('focused');
          }
        });
        
        // Check initial state
        if (input.value) {
          group.classList.add('focused');
        }
      }
    });
  }

  // Loading States
  function showSkeleton(element) {
    element.classList.add('skeleton');
  }

  function hideSkeleton(element) {
    element.classList.remove('skeleton');
  }

  // Text Reveal Animation
  function initTextReveal() {
    const revealElements = document.querySelectorAll('.reveal-text');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });
  }

  // GRIT Framework Interactive Animation
  function initGRITAnimation() {
    const gritPillars = document.querySelectorAll('.grit-pillar');
    
    gritPillars.forEach((pillar, index) => {
      pillar.addEventListener('mouseenter', () => {
        pillar.style.animationDelay = '0s';
        pillar.style.animation = 'pulse 1s ease-in-out infinite';
      });
      
      pillar.addEventListener('mouseleave', () => {
        pillar.style.animation = '';
      });
      
      // Add stagger effect on load
      pillar.style.opacity = '0';
      pillar.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        pillar.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        pillar.style.opacity = '1';
        pillar.style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  }

  // Metric Counter Animation
  function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const value = target.innerText;
          
          // Extract number from string (handles things like "25+", "90%", etc.)
          const match = value.match(/(\d+)/);
          if (match) {
            const number = parseInt(match[1]);
            const suffix = value.replace(match[1], '');
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                current = number;
                clearInterval(timer);
              }
              target.innerText = Math.floor(current) + suffix;
            }, 30);
          }
          
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.5
    });

    metrics.forEach(metric => {
      observer.observe(metric);
    });
  }

  // Hover Effects Enhancement
  function enhanceHoverEffects() {
    // Add hover classes
    document.querySelectorAll('.card').forEach(card => {
      if (!card.classList.contains('hover-lift')) {
        card.classList.add('hover-lift');
      }
    });
    
    document.querySelectorAll('.btn-primary, .btn-ghost').forEach(button => {
      button.classList.add('btn-premium');
    });
  }

  // Mobile Touch Feedback
  function initTouchFeedback() {
    if ('ontouchstart' in window) {
      document.body.classList.add('touch-device');
      
      const touchElements = document.querySelectorAll('.btn-primary, .btn-ghost, .card');
      touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
          element.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', () => {
          setTimeout(() => {
            element.classList.remove('touch-active');
          }, 300);
        });
      });
    }
  }

  // Initialize Everything
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initScrollProgress();
    initScrollAnimations();
    initParallax();
    initSmoothScroll();
    initMagneticButtons();
    initFormAnimations();
    initTextReveal();
    initGRITAnimation();
    animateMetrics();
    enhanceHoverEffects();
    initTouchFeedback();

    // Add page transition class
    document.body.classList.add('page-transition');

    // Performance optimization: Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        document.body.classList.toggle('scrolled', window.scrollY > 50);
      });
    });
  }

  // Start initialization
  init();

  // Export for use in other scripts if needed
  window.GritInteractions = {
    showSkeleton,
    hideSkeleton,
    init
  };

})();