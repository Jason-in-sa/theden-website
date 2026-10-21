# The Den Training Club — Website Project (WEDE5020 Phase 3)

[![Live Website](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://jason-in-sa.github.io/theden-website/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Jason-in-sa/theden-website)

Welcome to the official web repository for **The Den Training Club**, a modern functional fitness and HYROX training facility based at Sandringham High School in Johannesburg, South Africa.

---

## 🚀 Live Site & Links

* **Live GitHub Pages URL:** [https://jason-in-sa.github.io/theden-website/](https://jason-in-sa.github.io/theden-website/)
* **GitHub Repository:** [https://github.com/Jason-in-sa/theden-website](https://github.com/Jason-in-sa/theden-website)

---

## 📖 Overview & Features

This responsive, multi-page website was designed and built as part of the **WEDE5020 Phase 3 Portfolio of Evidence (PoE)** submission. It provides an interactive platform for prospective and current members to explore training programs, calculate membership costs, browse merchandise, and submit enquiries.

### Key Features Implemented:
* **7-Page Site Structure:** `index.html`, `about.html`, `program.html`, `packages.html`, `shop.html`, `contact.html`, and `enquiry.html`.
* **Mobile Responsive Navigation:** Accessible hamburger menu toggle built for all device viewport sizes.
* **Multi-Image Lightbox Gallery (`shop.html`):** Interactive modal for viewing store items in full screen with arrow-button and keyboard arrow navigation.
* **Dynamic Membership Calculator (`packages.html`):** Interactive JavaScript calculator updating total monthly fees based on selected package tiers and Sandringham High student discounts.
* **Client-Side Form Validation (`enquiry.html`):** Real-time JavaScript validation for required fields and valid email formatting with instant feedback display.
* **SEO & Accessibility:** Descriptive meta tags (`title`, `description`, `keywords`, `author`), semantic HTML5 elements, and `aria-*` attributes.

---

## 🛠️ Built With

* **HTML5:** Semantic layout structuring and meta tagging.
* **CSS3:** Custom styling, Flexbox layout grids, media queries, and root CSS variables.
* **JavaScript (ES6):** DOM manipulation, modal handling, dynamic price calculation, and form validation logic.
* **GitHub Pages:** Web hosting and continuous deployment.

---

## 📂 Repository File Structure

```text
theden-website/
├── css/
│   └── style.css            # Primary stylesheet
├── js/
│   └── main.js             # Site interactivity, calculator, modal & validation
├── images/                 # Optimized brand logos, product photos & media assets
├── index.html              # Home page
├── about.html              # About The Den
├── program.html            # The Training Program & Schedule
├── packages.html           # Membership Packages & Fee Calculator
├── shop.html               # Merchandise Store with Lightbox Gallery
├── contact.html            # Contact Information & Location Map
├── enquiry.html            # Dedicated Membership & General Enquiry Form
└── README.md               # Project documentation

---

## 🗺️ Site Map & Navigation Architecture

Below is the visual site map outlining the structure and purpose of each page across **The Den Training Club** website:

```text
The Den Training Club (Root)
│
├── 🏠 index.html            — Home page (Hero, club highlights, quick links)
├── ℹ️ about.html            — About Us (Club history, coaching staff, facility details)
├── 🏋️ program.html          — The Program (HYROX & functional fitness schedules)
├── 💳 packages.html         — Membership Packages (Tier options & interactive fee calculator)
├── 🛍️ shop.html             — Merch Store (Products & multi-image full-screen lightbox gallery)
├── 📞 contact.html          — Contact & Location (Address, embedded map, facility hours)
└── 📝 enquiry.html          — Enquiry Form (Dedicated page with client-side form validation)

---

## 📝 Changelog

All notable changes and development milestones for **The Den Training Club** website project.

### [Phase 3 Final Polish] — 2026-10-21
#### Added
* Created dedicated `enquiry.html` page for streamlined user queries with client-side form validation.
* Added full-screen interactive Lightbox modal gallery on `shop.html` with arrow and keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
* Added `sitemap.xml` for improved search engine crawling and indexing.
* Added site map architecture diagram to `README.md`.

#### Changed
* Refactored site navigation across all 7 HTML pages to include the new Enquire page link.
* Updated `.lightbox` and `.lightbox-content` CSS rules in `css/style.css` for optimal full-screen modal overlays.

#### Fixed
* Resolved `Uncaught SyntaxError` in `js/main.js` caused by duplicate `DOMContentLoaded` event listeners and an unclosed bracket.
* Corrected method case typo (`addEventlistener` to `addEventListener`) on navigation buttons.

---

### [Phase 2 Core Build] — 2026-10-15
#### Added
* Implemented interactive membership calculator on `packages.html` with Sandringham High student discount toggle.
* Implemented mobile navigation menu toggle (`.nav-toggle`) in `js/main.js`.
* Established core CSS design system with custom properties (CSS root variables) in `css/style.css`.

---

### [Phase 1 Initial Setup] — 2026-10-01
#### Added
* Initialized GitHub repository `Jason-in-sa/theden-website` and enabled GitHub Pages hosting.
* Created baseline HTML5 page structures (`index.html`, `about.html`, `program.html`, `packages.html`, `shop.html`, `contact.html`).
* Added primary brand assets, logos, and product imagery. 
