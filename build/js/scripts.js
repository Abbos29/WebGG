// Custom Scripts
// Custom scripts
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion()


// SCROLLREVEAL

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.hero__title, .hero__text, .section__content, .form__title', {
    delay: 1000,
    interval: 500,
    origin: 'left'
});
ScrollReveal().reveal('.logo', {
    reset: false,
    delay: 500,
    origin: 'left'
});

ScrollReveal().reveal('.section__img, .contact-form', {
    delay: 500,
    origin: 'right'
});
ScrollReveal().reveal('.navbar', {
    reset: false,
    delay: 500,
    origin: 'right'
});

ScrollReveal().reveal('.section__title, .accordion__item', {
    delay: 500,
    interval: 500,
    origin: 'top'
});
ScrollReveal().reveal('.footer__text, .footer__logo', {
    delay: 500,
    interval: 500,
    origin: 'top'
});

ScrollReveal().reveal('.hero-btn, .hero__item, .section__text', {
    delay: 500,
    interval: 1000,
    origin: 'bottom'
});

ScrollReveal().reveal('.section__text', {
    delay: 200,
    origin: 'bottom'
});

