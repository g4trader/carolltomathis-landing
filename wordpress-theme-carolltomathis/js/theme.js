/**
 * Caroll Tomathis Theme JavaScript
 */

(function() {
    'use strict';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile menu toggle (if needed in the future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('is-open');
            this.classList.toggle('is-active');
        });
    }

    // Add active class to current menu item
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.main-navigation a');
    
    menuLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
            link.classList.add('current-menu-item');
        }
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

})();

