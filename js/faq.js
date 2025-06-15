

// GYIK kinyitás/összecsukás animáció
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('active'); // Aktív osztály hozzáadása/eltávolítása
    });
});
