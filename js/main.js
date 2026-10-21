/* ==========================================================================
   THE DEN TRAINING CLUB - MAIN JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. MOBILE NAVIGATION TOGGLE
    // ----------------------------------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
    }

    // ----------------------------------------------------------------------
    // 2. CONTACT FORM VALIDATION (contact.html)
    // ----------------------------------------------------------------------
    const contactForm = document.querySelector('#contact-form');
    const formFeedback = document.querySelector('#form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page refresh

            const name = document.querySelector('#fullname').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                showFeedback('Please fill out all required fields.', 'red');
                return;
            }

            if (!emailPattern.test(email)) {
                showFeedback('Please enter a valid email address.', 'red');
                return;
            }

            showFeedback(`Thank you, ${name}! Your enquiry has been received.`, '#E63946');
            contactForm.reset();
        });
    }

    function showFeedback(text, color) {
        if (!formFeedback) return;
        formFeedback.textContent = text;
        formFeedback.style.color = color;
        formFeedback.style.display = 'block';
    }
    // ----------------------------------------------------------------------
    // 3. INTERACTIVE MEMBERSHIP CALCULATOR (packages.html)
    // ----------------------------------------------------------------------
    const calcPackage = document.querySelector('#calc-package');
    const calcStudent = document.querySelector('#calc-student');
    const calcTotal = document.querySelector('#calc-total');

    if (calcPackage && calcTotal) {
        const updatePrice = () => {
            let basePrice = parseFloat(calcPackage.value) || 0;
            if (calcStudent && calcStudent.checked) {
                basePrice *= 0.85; // 15% discount for verified Sandringham High students
            }
            calcTotal.textContent = `R${basePrice.toFixed(2)}`;
        };

        calcPackage.addEventListener('change', updatePrice);
        if (calcStudent) calcStudent.addEventListener('change', updatePrice);
        updatePrice(); // Run once on load
    }

});

document.addEventListener('DOMContentLoaded', () => {
// ----------------------------------------------------------------------
    // 4. MULTI-IMAGE LIGHTBOX GALLERY (shop.html)
    // ----------------------------------------------------------------------
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('#lightbox-img');
    const lightboxCaption = document.querySelector('#lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('#lightbox-prev');
    const nextBtn = document.querySelector('#lightbox-next');
    const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));

    let currentIndex = 0;

    if (lightbox && triggers.length > 0) {
        // Open lightbox at clicked image index
        triggers.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                updateLightboxImage();
                lightbox.style.display = 'flex';
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });

        // Function to update image source and caption based on current index
        function updateLightboxImage() {
            const currentImg = triggers[currentIndex];
            if (!currentImg) return;
            lightboxImg.src = currentImg.src;
            lightboxCaption.textContent = `${currentImg.alt || 'Shop Item'} (${currentIndex + 1} of ${triggers.length})`;
        }

        // Navigate Next
        function nextImage() {
            currentIndex = (currentIndex + 1) % triggers.length;
            updateLightboxImage();
        }

        // Navigate Previous
        function prevImage() {
            currentIndex = (currentIndex - 1 + triggers.length) % triggers.length;
            updateLightboxImage();
        }

        // Close Lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
        }

        // Event Listeners for Navigation Buttons
        if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
        if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Keyboard Navigation (Arrow Keys & Escape)
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'Escape') closeLightbox();
            }
   });
    }
});

