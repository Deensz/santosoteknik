// Santoso Teknik - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/90', 'bg-white');
            navbar.classList.replace('py-4', 'py-2'); // minor shrink effect if we had padding
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white', 'bg-white/90');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        // Trigger reflow
        void mobileMenu.offsetWidth;
        mobileMenu.classList.remove('opacity-0');
        mobileMenuDrawer.classList.remove('translate-x-full');
        document.body.classList.add('overflow-hidden');
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('opacity-0');
        mobileMenuDrawer.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300); // match duration-300
    }

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking overlay
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // 3. Initialize GLightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        zoomable: true
    });

    // 4. Contact Form Interaction (Demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button');
        submitBtn.addEventListener('click', () => {
            const inputs = contactForm.querySelectorAll('input, textarea');
            let allFilled = true;
            inputs.forEach(input => {
                if(!input.value) allFilled = false;
            });
            
            if(!allFilled) {
                alert('Tolong lengkapi semua kolom terlebih dahulu.');
            } else {
                // If this was real we would open WhatsApp link here with prefilled text
                const nama = inputs[0].value;
                const hp = inputs[1].value;
                const pesan = inputs[2].value;
                
                const waText = `Halo Santoso Teknik, saya ingin konsultasi servis.%0A%0ANama: ${nama}%0ANo HP: ${hp}%0AKeluhan: ${pesan}`;
                window.open(`https://wa.me/6285856076800?text=${waText}`, '_blank');
            }
        });
    }
});
