'use strict';

const slides = [...document.querySelectorAll('.slide')],
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

let i = 0;
prev.addEventListener('click', () => {
    if (i == 0) {
        slides[i].classList.remove('slide_active');

        i = slides.length - 1;

        slides[i].classList.add('slide_active');
    } else {
        slides[i].classList.remove('slide_active');

        i--;

        slides[i].classList.add('slide_active');
    }
});

next.addEventListener('click', () => {
    if (i == slides.length - 1) {
        slides[i].classList.remove('slide_active');

        i = 0;

        slides[i].classList.add('slide_active');
    } else {
        slides[i].classList.remove('slide_active');

        i++;

        slides[i].classList.add('slide_active');
    }
});