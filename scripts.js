// Tailwind Configuration
if (typeof window !== 'undefined' && window.tailwind) {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    light: {
                        bg: '#ffffff',
                        text: '#374151',
                        primary: '#3b82f6',
                        secondary: '#60a5fa'
                    },
                    dark: {
                        bg: '#000000',
                        text: '#ffffff',
                        primary: '#dc2626',
                        secondary: '#ef4444'
                    }
                }
            },
        },
    }
}

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const sunIcons = document.querySelectorAll('.theme-toggle svg:first-child');
    const moonIcons = document.querySelectorAll('.theme-toggle svg:last-child');
    
    // Function to update icons based on theme
    const updateIcons = (isDark) => {
        sunIcons.forEach(icon => icon.classList.toggle('hidden', isDark));
        moonIcons.forEach(icon => icon.classList.toggle('hidden', !isDark));
    };

    // Set dark mode as default
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    }

    // Add click event to all theme toggle buttons
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcons(isDark);
        });
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scroll functionality for all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"], button[class*="view-work-btn"], button[class*="contact-btn"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href') || 
                           (link.classList.contains('view-work-btn') ? '#projects' : '#contact');
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // If mobile menu is open, close it after clicking a link
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});