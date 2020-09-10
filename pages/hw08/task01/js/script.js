'use strict';

const squaresArr = [...document.querySelectorAll('.square')],
    parent = document.querySelector('.squaresWrapper'),
    counter = document.querySelector('.taskOne__text');

let Elements = [];


document.querySelector('.btnStart ').addEventListener('click', () => {
    squaresArr.forEach(e => e.setAttribute('style', `background: #000`));

    Elements = squaresArr.slice();

    const interval = setInterval(() => {

        let randomIndex = Math.floor(Math.random() * Math.floor(Elements.length)),
            randomColor = `#${Math.random().toString(16).slice(2,8)}`;

        if (Elements.length == 0) {
            clearInterval(interval);
        } else {
            counter.innerHTML = `Кількість пустих квадратів: ${Elements.length - 1}`;

            Elements[randomIndex].setAttribute('style', `background: ${randomColor}`);

            Elements.splice(randomIndex, 1);
        }
    }, 10);
});

parent.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'DIV') {
        counter.innerHTML = `Кількість пустих квадратів: ${Elements.length  + 1}`;

        if (e.target.style.backgroundColor == "rgb(0, 0, 0)") {

        } else {
            Elements.push(e.target.style.backgroundColor);
            console.log(Elements)

        }

        e.target.setAttribute('style', 'background: #000');
    }
});