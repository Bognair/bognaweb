document.addEventListener('DOMContentLoaded', () => {
    // Görgetéskor megjelenő animációk Intersection Observerrel
    const scrollElements = document.querySelectorAll('.scroll-anim');

    const observerOptions = {
        root: null, // A viewport a root
        rootMargin: '0px',
        threshold: 0.1 // Ha az elem 10%-a látható, triggerelje
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Késleltetett animáció, ha van data-scroll-delay attribútum
                const delay = parseInt(entry.target.dataset.scrollDelay || '0');
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                observer.unobserve(entry.target); // Csak egyszer animáljon
            }
        });
    }, observerOptions);

    scrollElements.forEach(el => observer.observe(el));

    // A Typewriter effektus a main.js-ben van a CSS animáció miatt.
    // Ha összetettebb JS-es typewriter kellene, az ide jöhetne GSAP-pel vagy anélkül.
});