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