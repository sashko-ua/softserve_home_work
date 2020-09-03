'use strict';

const singleWordNum = ['eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
];

const twoDigitNum = ['ten', 'twenty', 'thirty',
    'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety'
];

const oneDigitNum = ['one', 'two', 'three',
    'four', 'five', 'six',
    'seven', 'eight', 'nine'
];

const num = 12;

function getTextOfNum(n) {
    const [firstChar, secondChar] = String(n);
    if (n > 10 && n < 20) {
        return singleWordNum[secondChar - 1];
    } else if (+secondChar === 0) {
        return twoDigitNum[firstChar - 1];
    } else {
        return `${twoDigitNum[firstChar - 1]} ${oneDigitNum[secondChar - 1]}`;
    }
}

console.log(getTextOfNum(num));


const str = 'мОЇ1бАТЬКИ2тЕРОРИСТИ...3бО4я5-6бомба!';