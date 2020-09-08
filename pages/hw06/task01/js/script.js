'use strict';

const squaresArr = [...document.querySelectorAll('.square')],
    maxIndex = squaresArr.length;

document.querySelector('.btn').addEventListener('click', () => {
    squaresArr.forEach(e => e.setAttribute('style', `background: #000`));

    changeColor();

    function changeColor() {
        let index, //рандомний інлексу
            usedNums = [], //перевірка на повтори рандомних часел
            color;

        const interval = setInterval(() => getRandomValue(maxIndex), 10);

        function getRandomValue(max) {
            color = randomColor(); //рандомний колір (плагін)`

            index = Math.floor(Math.random() * max); //індекс рандомнго квадрата
            checkIndex();
        }

        function checkIndex() {
            if (usedNums.find(e => e == index) > -1) { // перевірка на повтор індекса
                getRandomValue(maxIndex);
            } else {
                usedNums.push(index);

                fillColor();

                if (usedNums.length >= maxIndex) {
                    clearInterval(interval);
                    console.log(usedNums);
                };
            }
        }

        function fillColor() {
            squaresArr[index].setAttribute('style', `background: ${color}`); // встановлення рандомного кольору для дандомного квадрата
        }
    }
});