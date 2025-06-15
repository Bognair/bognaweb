document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Megakadályozza az alapértelmezett űrlap küldést

            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const subjectInput = contactForm.querySelector('#subject');
            const messageInput = contactForm.querySelector('#message');

            let isValid = true;
            let errorMessages = [];

            // Validáció
            if (nameInput.value.trim() === '') {
                isValid = false;
                errorMessages.push('Kérjük, adja meg a nevét.');
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }

            if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                isValid = false;
                errorMessages.push('Kérjük, érvényes e-mail címet adjon meg.');
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }

            if (subjectInput.value.trim() === '') {
                isValid = false;
                errorMessages.push('Kérjük, adja meg az üzenet tárgyát.');
                subjectInput.classList.add('error');
            } else {
                subjectInput.classList.remove('error');
            }

            if (messageInput.value.trim() === '') {
                isValid = false;
                errorMessages.push('Kérjük, írja meg üzenetét.');
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }

            if (isValid) {
                // **Backend Integráció Szükséges Itt!**
                // Ezen a ponton küldenéd az adatokat egy szerverre (pl. PHP, Node.js, Python Flask/Django)
                // Vagy egy harmadik féltől származó szolgáltatásnak, mint pl. Formspree, EmailJS.
                // Példa Formspree használatára (a form action-jét kellene módosítani)
                // <form action="https://formspree.io/f/xanookvk" method="POST">
                alert('Az üzenet sikeresen elküldve! (Ez egy frontend demo. Kérjük, vegye figyelembe, hogy az üzenetek tényleges elküldéséhez szerveroldali integrációra van szükség, vagy egy harmadik féltől származó űrlapkezelő szolgáltatásra.)');
                contactForm.reset(); // Ürítse az űrlapot
                // Eltávolítja az esetleges hibaüzenetek stílusait is
                document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
                    input.classList.remove('error');
                });
            } else {
                // Hibaüzenetek megjelenítése (példaként alert)
                alert('Kérjük, javítsa az alábbi hibákat:\n' + errorMessages.join('\n'));
                // Valódi alkalmazásban elegánsabban kezelnénk, pl. hibaüzeneteket a mezők alatt.
            }
        });
    }
});