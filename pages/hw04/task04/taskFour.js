'use strict';

const perentWrapper = document.querySelector('table'),
    bg = document.querySelector('.taskFour'),
    clases = ['one1', 'one2', 'one3', 'one3', 'two1', 'two2', 'two3', 'two4', 'three1', 'three2', 'three3', 'three4', 'five1', 'five2', 'five3', 'five4', 'six1', 'six2', 'six3', 'six4', 'seven1', 'seven2', 'seven3', 'seven4'];

perentWrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'TD') {
        const bgColor = e.toElement.className;

        bg.classList.remove(...clases);
        bg.classList.add(bgColor);

        console.log(bg)
    }
});