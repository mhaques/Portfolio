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
});