document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Scroll Header
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // Pre-filled WhatsApp Logic (Optional refinement)
    const waButtons = document.querySelectorAll('a[href^="https://wa.me/"]');
    waButtons.forEach(btn => {
        const message = encodeURIComponent("Halo Rafi! Saya lihat website kamu dan tertarik tanya-tanya soal jasa edit visualnya.");
        const currentHref = btn.getAttribute('href');
        btn.setAttribute('href', `${currentHref}?text=${message}`);
    });
});
