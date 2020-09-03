'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // __________TaskOne__________

    const height = document.querySelector('#height'),
        width = document.querySelector('#width'),
        length = document.querySelector('#length'),
        heightWithout = document.querySelector('#heightWithout'),
        lengthWithout = document.querySelector('#lengthWithout'),
        doneOne = document.querySelector('#doneOne');

    doneOne.addEventListener('click', () => {
        const HV = height.value,
            LV = length.value,
            WV = width.value;

        answerOneWithout.innerHTML = '';

        // Площа для фарбування та к-ть банок
        const resultArea = (HV * LV + HV * WV) * 2,
            resultJar = resultArea / 16;

        // Площа для фарбування беручи до уваги вікна і двері, та к-ть банок
        const resultAreaWithout = resultArea - heightWithout.value * lengthWithout.value,
            resultJarWithout = resultAreaWithout / 16;

        if (HV > 1000 || LV > 1000 || HV > 1000) {
            answerOne.innerHTML = 'Занадто вкликий об\'єм роботи для компанії!'
        } else if (HV == 0) {
            answerOne.innerHTML = 'Немає що фарбувати'
        } else if (resultAreaWithout <= 0) {
            answerOne.innerHTML = 'Десь якась помилка...';
        } else {
            answerOne.innerHTML = `На ${resultArea} м<sup>2</sup>, вам потрібно ${resultJar.toFixed(1)} банок(-и) фарби`;

            answerOneWithout.innerHTML = `Беручи до уваги площу, що не потрібно фарбувати, то залишиться лише ${resultAreaWithout} м<sup>2</sup>, тому знадобиться ${resultJarWithout.toFixed(1)} банок(-и) фарби`;
        }
    });

    // __________TaskTwo__________

    const capacity = document.querySelector('#capacity'),
        price = document.querySelector('#price'),
        doneTwo = document.querySelector('#doneTwo');

    doneTwo.addEventListener('click', () => {
        // make mass
        const capacityArr = capacity.value.split(', '),
            priceArr = price.value.split(', ');

        // check
        const one = capacityArr.every(check),
            two = priceArr.every(check);

        function check(element, index, array) {
            return element <= 100;
        }

        // sort mass
        capacityArr.sort(function (a, b) {
            return a - b;
        });

        priceArr.sort(function (a, b) {
            return a - b;
        });

        // get result
        if (one == false || two == false) {
            answerTwo.innerHTML = 'Та ні, хлопці, занад-то багато хочете!'
        } else {
            const least = capacityArr[0] * priceArr[0],
                middle = capacityArr[1] * priceArr[1],
                most = capacityArr[2] * priceArr[2];

            answerTwo.innerHTML = `Найменша ємність з найдешевшим піском коштує ${least} грн, середня ємність з середньою ціною коштує ${middle} грн, найбільша ємність з найдорожчим піском коштує ${most} грн. Всього отримаєте ${least + middle + most} грн.`
        }
    });

    // __________TaskThree__________

    const ticket = document.querySelector('#ticket'),
        doneThree = document.querySelector('#doneThree'),
        answerThree = document.querySelector('#answerThree');

    doneThree.addEventListener('click', () => {
        const tecketArr = ticket.value.split(''),
            left = tecketArr[0] * 1 + tecketArr[1] * 1 + tecketArr[2] * 1,
            right = tecketArr[3] * 1 + tecketArr[4] * 1 + tecketArr[5] * 1;

        (left == right) ? answerThree.innerHTML = 'Щасливий квиток!': answerThree.innerHTML = 'Наступного разу пощастить=('
    });

    // __________TaskFour__________

    // __________4.1__________

    let input4One = document.querySelector('#inputFourOne'),
        button4One = document.querySelector('#buttonFourOne');

    button4One.addEventListener('click', () => {
        const age = input4One.value;

        switch (true) {
            case age < 0: {
                alert('Щось пішло не так...');
                break;
            }
            case age >= 0 && age <= 12: {
                alert('Ти поки дитина, радій!');
                break;
            }
            case age > 12 && age <= 18: {
                alert('О, підліток! Тримайтесь, батьки=)');
                break;
            }
            case age > 18 && age <= 60: {
                alert('Ти вже дорослий, тримайся!');
                break;
            }
            case age > 60 && age <= 100: {
                alert('Пенсіонер. Ну тут без жартів...');
                break;
            }
            case age > 150: {
                alert('Дункан Маклауд, це ти!?');
                break;
            }
        }
    });

    // __________4.2__________

    const input4Two = document.querySelector('#inputFourTwo'),
        button4Two = document.querySelector('#buttonFourTwo');

    button4Two.addEventListener('click', () => {
        const num = input4Two.value;
        switch (true) {
            case num < 0: {
                alert('Ну я ж просив від 0 до 9!');
                break;
            }
            case num == 0: {
                alert('На клавіші 0 знаходиться ")"');
                break;
            }
            case num == 1: {
                alert('На клавіші 1 знаходиться "!"');
                break;
            }
            case num == 2: {
                alert('На клавіші 2 знаходиться "@"');
                break;
            }
            case num == 3: {
                alert('ТНа клавіші 3 знаходиться "#"');
                break;
            }
            case num == 4: {
                alert('На клавіші 4 знаходиться "$"');
                break;
            }
            case num == 5: {
                alert('На клавіші 5 знаходиться "%"');
                break;
            }
            case num == 6: {
                alert('На клавіші 6 знаходиться "^"');
                break;
            }
            case num == 7: {
                alert('На клавіші 7 знаходиться "&"');
                break;
            }
            case num == 8: {
                alert('На клавіші 8 знаходиться "*"');
                break;
            }
            case num == 9: {
                alert('На клавіші 9 знаходиться "("');
                break;
            }
            case num > 9: {
                alert('Ну я ж просив від 0 до 9!');
                break;
            }
        }
    })

    // __________4.3__________

    const input4Three = document.querySelector('#inputFourThree'),
        button4Three = document.querySelector('#buttonFourThee');

    button4Three.addEventListener('click', () => {
        const tripleNum = input4Three.value;

        (tripleNum.length > 3 || tripleNum.length < 3) ? alert("Ну я ж просив трьохзначне число"): findTheSame(tripleNum);

        function findTheSame(item) {
            const mass = item.split('');
            if (mass[0] == mass[1] || mass[0] == mass[2] || mass[1] == mass[2]) {
                alert('Твоє число має однакові цифри');
            } else {
                alert('Цифри в твоєму числі унікальні');
            }
        }
    });

    // __________4.4__________

    const input4Four = document.querySelector('#inputFourFour'),
        button4Four = document.querySelector('#buttonFourFour');

    button4Four.addEventListener('click', () => {
        const year = input4Four.value;

        (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? alert('Це високосний рік'): alert('Це не високосний рік');
    });

    // __________4.5__________

    const input4Five = document.querySelector('#inputFourFive'),
        button4Five = document.querySelector('#buttonFourFive');

    button4Five.addEventListener('click', () => {
        const fiveDigitNum = input4Five.value;

        (fiveDigitNum.length < 5 || fiveDigitNum.length > 5) ? alert('В п\'ятизначному числі 5 цифр, не плутай'): checkPolimorf();

        function checkPolimorf() {
            const polimorfRev = fiveDigitNum.split('').reverse().join('');

            (fiveDigitNum == polimorfRev) ? alert('Число поліморфне'): alert('Звичайне число');
        };
    });

    // __________4.6__________

    const input4Six = document.querySelector('#inputFourSix'),
        button4Six = document.querySelector('#buttonFourSix'),
        radioUah = document.querySelector('#uah'),
        radioEur = document.querySelector('#eur'),
        radioGbp = document.querySelector('#gbp'),
        UsdToUah = 27.44,
        UsdToEur = .85,
        UsdToGbp = 0.76;

    button4Six.addEventListener('click', () => {
        const dollar = input4Six.value;

        if (radioUah.checked == true) {
            const rusultUah = dollar * UsdToUah;
            alert(`Ти отримаєш ${rusultUah} грн`);
        } else if (radioEur.checked == true) {
            const rusultEur = dollar * UsdToEur;
            alert(`Ти отримаєш ${rusultEur} грн`);
        } else if (radioGbp.checked == true) {
            const rusultGbp = dollar * UsdToGbp;
            alert(`Ти отримаєш ${rusultGbp} грн`);
        } else {
            alert('Виберіть валюту, на яку хочете обміняти долари')
        }
    });

    // __________4.7__________

    const input4Seven = document.querySelector('#inputFourSeven'),
        button4Seven = document.querySelector('#buttonFourSeven');

    button4Seven.addEventListener('click', () => {
        const sum = input4Seven.value;

        if (sum < 200) {
            alert('На цю суму не діє знижка');
        } else if (sum >= 200 && sum < 300) {
            alert(`До оплати ${sum - (sum * (3 / 100)).toFixed(2)}`);
        } else if (sum >= 300 && sum < 500) {
            alert(`До оплати ${sum - (sum * (5 / 100)).toFixed(2)}`);
        } else if (sum >= 500) {
            alert(`До оплати ${sum - (sum * (7 / 100)).toFixed(2)}`);
        };
    });

    // __________4.8__________

    const input4EightCircle = document.querySelector('#inputFourEightCircle'),
        input4EightSquare = document.querySelector('#inputFourEightSquare'),
        button4Eight = document.querySelector('#buttonFourEight');

    button4Eight.addEventListener('click', () => {
        const circleDiagonal = input4EightCircle.value / (Math.PI * 2),
            squareDiagonal = (Math.sqrt(2) * (input4EightSquare.value / 4));

        (circleDiagonal < squareDiagonal) ? alert('Квадрат не поміститься в коло'): alert('Квадрат вліз в коло=)');
    });

    // __________4.9__________

    const antTrue = document.querySelector('#antTrue'),
        hippoTrue = document.querySelector('#hippoTrue'),
        shrimpTrue = document.querySelector('#shrimpTrue'),
        button4Nine = document.querySelector('#buttonFourNine');

    button4Nine.addEventListener('click', () => {
        let resultAnsw = 0;

        if (antTrue.checked == true) {
            resultAnsw += 2;
        }
        if (hippoTrue.checked == true) {
            resultAnsw += 2;
        }
        if (shrimpTrue.checked == true) {
            resultAnsw += 2;
        }
        alert(`Ваш результат ${resultAnsw}`);
    });

    // __________4.10__________

    const inputFourTen = document.querySelector('#inputFourTen'),
        buttonFourTen = document.querySelector('#buttonFourTen');

    buttonFourTen.addEventListener('click', () => {
        const DataMass = inputFourTen.value.split("-"),
            DataMassNum = DataMass.map(x => +x);
        console.log(DataMassNum)

        if ((DataMass[0] % 4 == 0 && DataMass[0] % 100 != 0 || DataMass[0] % 400 == 0) && (DataMassNum[1] == 2 && DataMassNum[2] == 29)) {
            // Високосний рік
            // Якщо користувач ввів 29 лютого високосного року, простий перехід на наступний місяць
            DataMassNum[2] = 1;
            ++DataMassNum[1];
            // Якщо користувач ввів 30 або 31 лютого (з ким не буває?), попередження про хибні данні. 
            /*
                Такою була моя логіка, але схема не працює. Бо якщо ввести такі дати, то просто отримаємо NaN та undefined.
                Запитання, ЧОМУ?
            */

            if (DataMass[2] > 29) {
                alert('В цьому році в лютому максимум 29 днів!')
            }
        } else if ((DataMass[0] % 4 != 0 && DataMass[0] % 100 == 0 || DataMass[0] % 400 != 0) && (DataMassNum[1] == 2 && DataMassNum[2] == 28)) {
            // Звичайний рік
            DataMassNum[2] = 1;
            ++DataMassNum[1];
            if (DataMass[2] > 28) {
                alert('В цьому році в лютому максимум 28 днів!')
            }
        } else if (DataMassNum[1] == 12 && DataMassNum[2] == 31) {
            DataMassNum[2] = 1;
            DataMassNum[1] = 1;
            ++DataMassNum[0];
            alert('Завтра новий рік! Де твій новорічний настрій?')
        } else if ((DataMassNum[1] == 1 || DataMassNum[1] == 3 || DataMassNum[1] == 5 || DataMassNum[1] == 7 || DataMassNum[1] == 8 || DataMassNum[1] == 10) && DataMassNum[2] == 31) {
            DataMassNum[2] = 1;
            ++DataMassNum[1];
        } else if ((DataMassNum[1] == 4 || DataMassNum[1] == 6 || DataMassNum[1] == 8 || DataMassNum[1] == 9 || DataMassNum[1] == 11) && DataMassNum[2] == 30) {
            DataMassNum[2] = 1;
            ++DataMassNum[1];
        } else {
            ++DataMassNum[2];

            if (DataMassNum[2] > 9) {
                alert(`Завтрішня дата: ${DataMassNum[2]}.${DataMassNum[1]}.${DataMassNum[0]}`)
            } else {
                alert(`Завтрішня дата: 0${DataMassNum[2]}.0${DataMassNum[1]}.${DataMassNum[0]}`)
            }
        }

    });
});