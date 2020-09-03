'use strict';

const btn = document.querySelector('.btn'),
    circles = document.querySelectorAll('.circle'),
    colors = ['red', 'orange', 'green'];

let count = 0;

btn.addEventListener('click', () => {
    if (count < 3) {
        circles[count].classList.toggle(colors[count]);
        count++;
    } else {
        count = 0;

        circles[0].classList.toggle(colors[0]);
        circles[1].classList.toggle(colors[1]);
        circles[2].classList.toggle(colors[2]);
    }
});