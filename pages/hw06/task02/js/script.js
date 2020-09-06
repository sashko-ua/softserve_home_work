'use strict';

const btnForPlus = document.querySelector('.taskTwoStart'),
    operator = ['*', '-', '+', '/'],
    mathTask = document.querySelector('.mathTask'),
    result = document.querySelector('.result'),
    answ = document.querySelector('.answ'),
    check = document.querySelector('.check');

let choiceOperator,
    numA,
    numB,
    task;

btnForPlus.addEventListener('click', () => {
    result.textContent = '';

    choiceOperator = Math.floor(Math.random() * Math.floor(2));

    if (choiceOperator == 0) {
        numA = Math.floor(Math.random() * (30 - 2) + 2);
        numB = Math.floor(Math.random() * (30 - 2) + 2);

        mathTask.textContent = `${numA} * ${numB} = ?`

        task = numA * numB;
    }

    if (choiceOperator == 1) {
        numA = Math.floor(Math.random() * (100 - 10) + 10);
        numB = Math.floor(Math.random() * (100 - 10) + 10);

        choiceOperator = Math.floor(Math.random() * Math.floor(3));

        if (choiceOperator == 1) {
            mathTask.textContent = `${numA} - ${numB} = ?`

            task = numA - numB;
        }

        if (choiceOperator == 2) {
            mathTask.textContent = `${numA} + ${numB} = ?`

            task = numA + numB;
        }

        if (choiceOperator == 0) {
            mathTask.textContent = `${numA} / ${numB} = ?`

            task = (numA / numB).toFixed(2);
        }
    }

    console.log(task);
});


check.addEventListener('click', () => {


    if (answ.value == task) {
        mathTask.textContent = '';

        result.textContent = 'Молодець!!!'
    } else {
        result.textContent = 'Подумай ще...'
    }

    answ.value = '';
})