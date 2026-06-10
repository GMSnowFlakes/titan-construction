/* =====================================================
   TITAN CONSTRUCTION
   Premium Homepage
   script.js
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initScrollReveal();
    initActiveNavigation();

});

/* =====================================================
   MOBILE MENU
===================================================== */

function initMobileMenu() {

    const mobileBtn =
        document.getElementById('mobileBtn');

    const mobileMenu =
        document.getElementById('mobileMenu');

    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener('click', () => {

        mobileMenu.classList.toggle('hidden');

        mobileBtn.innerHTML =
            mobileMenu.classList.contains('hidden')
            ? '☰'
            : '✕';

    });

    mobileMenu
        .querySelectorAll('a')
        .forEach(link => {

            link.addEventListener('click', () => {

                mobileMenu.classList.add('hidden');
                mobileBtn.innerHTML = '☰';

            });

        });

}

/* =====================================================
   STICKY HEADER
===================================================== */

function initStickyHeader() {

    const header =
        document.getElementById('header');

    if (!header) return;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            header.classList.add(
                'header-scrolled'
            );

        } else {

            header.classList.remove(
                'header-scrolled'
            );

        }

    });

}

/* =====================================================
   SMOOTH SCROLL
===================================================== */

function initSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                'click',
                function(e) {

                    const targetID =
                        this.getAttribute('href');

                    if (
                        targetID === '#'
                    ) return;

                    const target =
                        document.querySelector(targetID);

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: 'smooth',
                        block: 'start'

                    });

                }
            );

        });

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

function initScrollReveal() {

    const elements = document.querySelectorAll(

        '.service-card,' +
        '.project-card,' +
        '.stat-card'

    );

    elements.forEach(el => {

        el.classList.add('fade-up');

    });

    const observer =
        new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        'show'
                    );

                }

            });

        },

        {
            threshold:0.15
        }

    );

    elements.forEach(el => {

        observer.observe(el);

    });

}

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll('section[id]');

    const navLinks =
        document.querySelectorAll('nav a');

    if (!sections.length) return;

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight

            ) {

                current =
                    section.getAttribute('id');

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                'nav-active'
            );

            if (

                link.getAttribute('href')
                === `#${current}`

            ) {

                link.classList.add(
                    'nav-active'
                );

            }

        });

    });

}

/* =====================================================
   CTA TRACKING READY
===================================================== */

function trackCTA(action) {

    console.log(
        `CTA Clicked: ${action}`
    );

    /*
    Future Analytics

    gtag('event', 'click', {
        event_category: 'CTA',
        event_label: action
    });

    */

}

/* =====================================================
   AUTO CTA TRACKING
===================================================== */

document.addEventListener(
    'click',
    (e) => {

        const target =
            e.target.closest(
                '[data-track]'
            );

        if (!target) return;

        trackCTA(
            target.dataset.track
        );

    }
);

/* =====================================================
   FUTURE UPGRADES
===================================================== */

/*

PHASE 2 FEATURES

✓ Contact Form
✓ Quote Request Form
✓ Project Filtering
✓ Project Lightbox
✓ Before/After Gallery
✓ Testimonial Slider
✓ Google Maps Integration
✓ WhatsApp Button
✓ Email Notifications
✓ CRM Integration

*/