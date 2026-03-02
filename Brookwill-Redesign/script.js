// Brookwill GSAP Animations & Interactions

document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP ScrollTrigger if we are using it
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Parallax and Fade In
        gsap.from("h1", {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 0.2
        });

        gsap.from("h1 span", {
            duration: 1.2,
            y: 30,
            opacity: 0,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from("section:first-of-type p", {
            duration: 1.2,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 0.8
        });

        gsap.from(".heroCtaWrap", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.out",
            delay: 1.1
        });

        // Interactive Cards Stagger
        gsap.from(".grid > div", {
            scrollTrigger: {
                trigger: ".grid",
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Delivery Model text fade
        gsap.from(".max-w-7xl > h2, .max-w-7xl > p", {
            scrollTrigger: {
                trigger: ".bg-brookwill-surface\\/30",
                start: "top 70%"
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out"
        });

        // 4 Pillars scale in
        gsap.from(".md\\:grid-cols-4 > div", {
            scrollTrigger: {
                trigger: ".md\\:grid-cols-4",
                start: "top 85%"
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.4)"
        });

        // Workflow Items Stagger
        gsap.from(".space-y-4 > div", {
            scrollTrigger: {
                trigger: ".space-y-4",
                start: "top 75%"
            },
            x: -40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Navbar Scroll Effect
    const nav = document.querySelector('nav > div');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
            nav.classList.remove('py-4', 'px-8');
            nav.classList.add('py-3', 'px-6');
        } else {
            nav.classList.remove('nav-scrolled');
            nav.classList.add('py-4', 'px-8');
            nav.classList.remove('py-3', 'px-6');
        }
    });
});
