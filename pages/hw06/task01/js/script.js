'use strict';

const btn = document.querySelector('.btn'),
    squares = document.querySelectorAll('.square'),
    squaresArr = Array.from(squares),
    maxIndex = squaresArr.length;

btn.addEventListener('click', () => {
    squaresArr.forEach(e => e.setAttribute('style', `background: #000`));

    changeColor();

    function changeColor() {
        let index, //рандомний інлексу
            usedNums = [], //перевірка на повтори рандомних часел
            color;

        const interval = setInterval(() => getRandomValue(maxIndex), 100);

        function getRandomValue(max) {
            color = randomColor(); //рандомний колір (плагін)`

            index = Math.floor(Math.random() * Math.floor(max)); //індекс рандомнго квадрата
            checkIndex();
        }

        function checkIndex() {
            if (usedNums.find(e => e == index)) { // перевірка на повтор індекса
                getRandomValue(maxIndex);
            } else {
                // usedNums.splice(index, 1); //Дискотека=)
                usedNums.push(index);

                fillColor();

                if (usedNums.length >= maxIndex) {
                    clearInterval(interval);
                };

            }
        }

        function fillColor() {
            squaresArr[index].setAttribute('style', `background: ${color}`); // встановлення рандомного кольору для дандомного квадрата

            console.log(usedNums.length);
        }
    }
});