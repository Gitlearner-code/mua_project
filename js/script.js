// Language Management
const translations = {
    en: {},
    fr: {}
};

// Collect all translations from data attributes
document.querySelectorAll('[data-en][data-fr]').forEach(element => {
    const key = element.getAttribute('data-en');
    if (!translations.en[key]) {
        translations.en[key] = element.getAttribute('data-en');
        translations.fr[key] = element.getAttribute('data-fr');
    }
});

// Get stored language or detect browser language
function getInitialLanguage() {
    const stored = localStorage.getItem('mua-language');
    if (stored) return stored;
    
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
}

let currentLanguage = getInitialLanguage();

// Update all text based on language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mua-language', lang);
    
    document.querySelectorAll('[data-en][data-fr]').forEach(element => {
        const enText = element.getAttribute('data-en');
        const frText = element.getAttribute('data-fr');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = lang === 'en' ? enText : frText;
        } else if (element.classList.contains('toggle-details') && element.nextElementSibling && element.nextElementSibling.classList.contains('open')) {
            // Don't change button text if details are open - keep "Hide Details"
            element.textContent = lang === 'en' ? 'Hide Details' : 'Masquer Détails';
        } else {
            element.textContent = lang === 'en' ? enText : frText;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update button appearance
    updateLanguageButton();
}

// Update language button styling
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    const spans = langBtn.querySelectorAll('span');
    
    if (currentLanguage === 'en') {
        spans[0].style.fontWeight = '700';
        spans[0].style.opacity = '1';
        spans[1].style.fontWeight = '400';
        spans[1].style.opacity = '0.6';
    } else {
        spans[0].style.fontWeight = '400';
        spans[0].style.opacity = '0.6';
        spans[1].style.fontWeight = '700';
        spans[1].style.opacity = '1';
    }
}

// Language button click handler
document.getElementById('lang-btn').addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'fr' : 'en';
    updateLanguage(newLang);
});

// Initialize language on page load
updateLanguage(currentLanguage);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Project Details Toggle - using event delegation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-details')) {
            e.preventDefault();
            e.stopPropagation();
            
            const button = e.target;
            const projectDetails = button.parentElement.querySelector('.project-details');
            
            if (projectDetails) {
                projectDetails.classList.toggle('open');
                
                // Toggle button text
                if (projectDetails.classList.contains('open')) {
                    button.textContent = currentLanguage === 'en' ? 'Hide Details' : 'Masquer Détails';
                } else {
                    const enText = button.getAttribute('data-en');
                    const frText = button.getAttribute('data-fr');
                    button.textContent = currentLanguage === 'en' ? enText : frText;
                }
            }
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    });
});

// Form submission
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (data.name && data.email && data.message) {
            // Show success message
            const message = currentLanguage === 'en' 
                ? 'Thank you for your message! We will get back to you soon.'
                : 'Merci pour votre message! Nous vous recontacterons bientôt.';
            alert(message);
            form.reset();
        } else {
            const message = currentLanguage === 'en' 
                ? 'Please fill in all fields.'
                : 'Veuillez remplir tous les champs.';
            alert(message);
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Handle form inputs properly
const inputs = document.querySelectorAll('.contact-form input');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ddd';
        }
    });
});
