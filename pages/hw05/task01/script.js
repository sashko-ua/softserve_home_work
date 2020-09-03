'use strict';

// __________One-one__________
console.log('Task 1-1')
const units = ['один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'],
    tens = ['двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'],
    special = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шіснадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];

const number = 86;

numToString(number)

function numToString(el) {
    if (el < 10) {
        console.log(units[el - 1]);
    }

    if (el >= 10 && el < 20) {
        console.log(special[el - 10]);
    }

    if (el >= 20) {
        const TwoPart = el + ''.split('');

        if (TwoPart[1] == 0) {
            console.log(tens[TwoPart[0] - 2]);
        } else {
            console.log(`${tens[TwoPart[0] - 2]} ${units[TwoPart[1] - 1]}`);

        }
    }
}



console.log('')

// __________One-Two__________

console.log('Task 1-2')

const string = 'мОЇ1бАТЬКИ2тЕРОРИСТИ...3бО4я5-6бомба!',
    chairRegx = /[а-я]/,
    numRegx = /[0-9]/,
    otherRegx = /[.*+\-!?^${}()|[\]\\]/g;

statistic(string)

function statistic(str) {
    let chair = 0,
        num = 0,
        other = 0;

    str.toLocaleLowerCase().split('').map((el) => {
        if (el.match(chairRegx)) {
            chair++
        } else if (el.match(numRegx)) {
            num++
        } else if (el.match(otherRegx)) {
            other++
        }
    });

    console.log(`В рядку ${chair} букв, ${num} чисел та ${other} інших знаків`)
}

console.log('')

// __________One-three__________

console.log('Task 1-3')

changeСase(string)

function changeСase(str) {
    const answer = str.split('').map((el) => {
        if (/[а-я]/.test(el)) {
            return el.toUpperCase('');
        } else if (/[А-Я]/.test(el)) {
            return el.toLowerCase('')
        } else if (/[0-9]/.test(el)) {
            return '_'
        } else if (/[.*+\-!?^${}()|[\]\\]/.test(el)) {
            return el
        }
    }).join('')

    console.log(answer)
}

console.log('')