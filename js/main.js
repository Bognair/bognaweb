document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const backToTopButton = document.getElementById('back-to-top');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.main-nav .nav-list');

    // Dark/Light mód inicializálása és váltása
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Font Awesome ikon frissítés
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Font Awesome ikon frissítés
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Back to top gomb logika
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hamburger menü logika
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
        const isExpanded = navList.classList.contains('active');
        hamburgerMenu.setAttribute('aria-expanded', isExpanded);
    });

    // Menüpontra kattintva bezárja a hamburger menüt
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Bezárja a menüt csak ha az aktív
            if (navList.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navList.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
            // Frissíti az aktív linket
            updateActiveClass(link);
        });
    });

    // Aktív navigációs link kiemelése funkció
    function updateActiveClass(clickedLink = null) {
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.main-nav .nav-list a');

        navLinks.forEach(link => {
            link.classList.remove('active'); // Eltávolítja az összes active osztályt

            if (clickedLink && link === clickedLink) {
                // Ha egy linkre kattintottunk, az legyen az aktív
                link.classList.add('active');
            } else if (!clickedLink) {
                // Ha az oldal betöltődött, a path alapján állítja be
                const linkPath = link.getAttribute('href').split('/').pop();
                if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                    link.classList.add('active');
                }
            }
        });
    }

    // Oldal betöltésekor is beállítja az aktív linket
    updateActiveClass();
});


    // Timeline mód
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        root: null, // A viewport a gyökér
        rootMargin: '0px',
        threshold: 0.1 // Amikor az elem 10%-a láthatóvá válik
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Hozzáadja a 'visible' osztályt
                observer.unobserve(entry.target); // Már nem figyeljük az elemet
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item); // Minden idővonal elemet figyelünk
    });
});

    // Main Header scroll
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

    // Osszes velemenyre navigalasa
  function navigateToNewPage() {
    window.location.href = 'velemeny.html';
}
