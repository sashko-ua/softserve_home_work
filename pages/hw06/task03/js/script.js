'use strict';

const inputTaskThree = document.querySelector('.inputTaskThree'),
    checkName = document.querySelector('.checkName'),
    resultName = document.querySelector('.taskThree__result');

let nameArr;



inputTaskThree.addEventListener('input', () => {
    resultName.textContent = '';

    nameArr = inputTaskThree.value.split('');

    nameArr.forEach(element => {
        if (!isNaN(element)) {
            resultName.textContent = 'Не можна вводити числа та пробіл, видаляй!'
        }
    })

});

checkName.addEventListener('click', () => {

    let finishName = nameArr.map(check).join('');

    function check(e) {
        if (e == '_') {
            console.log(e)
            return e.replace(/[_]/, ' ');
        }

        if (isNaN(e)) {
            return e;
        }
    }

    nameArr.forEach(element => {
        if (!isNaN(element)) {
            resultName.textContent = `Ну ладно, сам видалю... На, ${finishName}`;
        } else {
            resultName.textContent = `Молодець, ${finishName}, ввів все без помиллок! `;
        }
    })
});