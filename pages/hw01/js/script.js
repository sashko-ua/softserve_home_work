"use strict";

// __________1__________
function areYouReady() {
    const ready = confirm('Зараз задам декілька запитань, готовий?');

    if (ready == false) {
        alert('Вибач, в тебе виходу немає=). Глибокий вдих і видих! Поїхали!');
        areYouReady();
    } else {
        const name = prompt("Як тебе звуть?");

        alert(`Привіт, ${name}! Приємно познайомитися;)`);
    };
};

areYouReady();

// __________2__________
function howOldAreYou() {
    const year = 2020;
    const age = +prompt("Якого ти року народження?");
    if (age >= year) {
        alert(`За моїми даними, ти ще не народився... Спробуй ще раз!`);
        howOldAreYou();
    } else {
        alert(`Ого, тобі цілих ${year - age} років!`);
    }
};
howOldAreYou();

// __________3__________
const square = +prompt("Задай довжину сторони якогось квадрата в сантиметрах");

alert(`Проща квадрата дорівнює ${square ** 2}см`);

// __________4__________
const circle = +prompt("Задай радіус довільного кола в сантиметрах, і буде тобі його площа!");

alert(`Проща кола дорівнює ${Math.PI * circle ** 2} см`);

// __________5__________
const distance = +prompt("Задай відстань від точки А до точки Б в кілометрах!"),
    time = +prompt("Задай бажаний час подолання цієї дистанції в годинах!");

alert(`Твоя швидкість посинна бути ${distance / time} км/год`);

// __________6__________
const exchangeRate = .84;

const dollar = +prompt("Скільки доларів ти хочеш обминяти на євро?");

alert(`Ти отримаєш ${dollar * exchangeRate} євро`);

// __________7__________
const usb = +prompt("Який розмір у твоєї флешки?(в гігабайтах)=)");

const a = usb * 1024 % 820;

const b = usb * 1024 - a;

const result = b / 820

alert(`Ти запишеш на неї ${result} файла(-ів) по 820 мб, і залишиться ${b / 1024} мб`);

// __________8__________
const money = +prompt("Скільки в тебе грошей?");
const chocolate = +prompt("Скільки улюблена коштує шоколадка?");

const c = money % chocolate;
const d = money - c;
const resultEigth = d / chocolate;

alert(`Ти можеш з'їсти сьогодні ${resultEigth} шоколадок, і в тебе залишиться аж ${c} грн!`);

// __________9__________
const num = +prompt("Введи любе тьохзначне чило і побачиш магію=)");

const first = num % 10;
const second = (num - first) / 10 % 10;
const third = (num - (num % 100)) / 100;

alert(`Тримай: ${first}${second}${third}`)