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

// ----------------------------------------------------------------------
    // 5. SUGGESTION FORM VALIDATION
    // ----------------------------------------------------------------------
    const suggestionForm = document.querySelector('#suggestion-form');
    const suggestionFeedback = document.querySelector('#suggestion-feedback');

    if (suggestionForm) {
        suggestionForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page refresh

            const category = document.querySelector('#sugg-category').value;
            const message = document.querySelector('#sugg-message').value.trim();

            if (!category || !message) {
                showSuggestionFeedback('Please fill out all fields before submitting.', '#E63946');
                return;
            }

            // Success output
            showSuggestionFeedback('Thank you! Your suggestion has been submitted.', '#2A9D8F');
            suggestionForm.reset();
        });
    }

    function showSuggestionFeedback(text, color) {
        if (!suggestionFeedback) return;
        suggestionFeedback.textContent = text;
        suggestionFeedback.style.backgroundColor = color;
        suggestionFeedback.style.color = '#ffffff';
        suggestionFeedback.style.display = 'block';
    }

    // ----------------------------------------------------------------------
    // GLOBAL SITE-WIDE SEARCH SYSTEM
    // ----------------------------------------------------------------------
    const siteIndex = [
        { title: "Home", url: "index.html", content: "The Den Training Club functional fitness gym Sandringham High School classes workouts" },
        { title: "About Us", url: "about.html", content: "About team coaches facility community Sandringham functional fitness equipment" },
        { title: "The Program", url: "program.html", content: "HYROX endurance strength conditioning timetable schedule daily workout routines" },
        { title: "Our Packages", url: "packages.html", content: "Membership pricing fees tiers monthly student discount Sandringham High rates" },
        { title: "Shop & Merchandise", url: "shop.html", content: "Store apparel hoodies tees jacket Marike Hartman supporters tee limited edition" },
        { title: "Contact Us", url: "contact.html", content: "Location map address operating hours phone email Sandringham High School" },
        { title: "Make an Enquiry", url: "enquiry.html", content: "Enquiry form questions membership details support join registration" }
    ];

    const searchOpenBtn = document.querySelector('#search-open-btn');
    const searchCloseBtn = document.querySelector('#search-close-btn');
    const searchModal = document.querySelector('#search-modal');
    const siteSearchInput = document.querySelector('#site-search-input');
    const searchResults = document.querySelector('#search-results');

    if (searchOpenBtn && searchModal) {
        searchOpenBtn.addEventListener('click', () => {
            searchModal.style.display = 'flex';
            searchModal.setAttribute('aria-hidden', 'false');
            if (siteSearchInput) siteSearchInput.focus();
        });

        function closeSearchModal() {
            searchModal.style.display = 'none';
            searchModal.setAttribute('aria-hidden', 'true');
            if (siteSearchInput) siteSearchInput.value = '';
            if (searchResults) searchResults.innerHTML = '';
        }

        if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearchModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchModal.style.display === 'flex') {
                closeSearchModal();
            }
        });

        if (siteSearchInput) {
            siteSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                searchResults.innerHTML = '';

                if (query.length === 0) return;

                const matches = siteIndex.filter(page => 
                    page.title.toLowerCase().includes(query) || 
                    page.content.toLowerCase().includes(query)
                );

                if (matches.length === 0) {
                    searchResults.innerHTML = '<p style="color: #aaaaaa; text-align: center;">No matching pages found.</p>';
                    return;
                }

                matches.forEach(page => {
                    const resultLink = document.createElement('a');
                    resultLink.href = page.url;
                    resultLink.className = 'search-result-item';
                    resultLink.innerHTML = `
                        <h4>${page.title}</h4>
                        <p>Matches keywords related to "${query}"</p>
                    `;
                    searchResults.appendChild(resultLink);
                });
            });
        }
    }

