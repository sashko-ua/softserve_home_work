'use strict';

const color = document.querySelectorAll('td'),
    perentColors = document.querySelector('table'),
    bg = document.querySelector('.taskFour');

perentColors.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'TD') {
        const bgColor = e.toElement.className;

        bg.classList.add(bgColor);

        console.log(bg)
    }
});