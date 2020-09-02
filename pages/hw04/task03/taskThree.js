// Напишите свои функции-аналоги методов массивов:

// pop,
// push,
// shift,
// unshift,
// concat

'use strict';

console.log('Task three');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    arr2 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(arr);
console.log(arr2);

// __________Pop__________
console.log('Pop');

pop(arr, arr2);

function pop(first, second) {
    first.splice(-1, 1);
    second.splice(-1, 1);
}

console.log(arr);
console.log(arr2);


// // __________Push__________
console.log('Push');

push(arr, arr2);

function push(first, second) {
    first.splice(arr.length + 1, 0, 'push');
    second.splice(arr.length + 1, 0, 'push');
}

console.log(arr);
console.log(arr2);

// // __________Shift__________
console.log('Shift');

shift(arr, arr2);

function shift(first, second) {
    first.splice(0, 1);
    second.splice(0, 1);
}

console.log(arr);
console.log(arr2);

// // __________Unshift__________
console.log('Unshift');

unshift(arr, arr2);

function unshift(first, second) {
    first.splice(0, 0, 'unshift');
    second.splice(0, 0, 'unshift');

}

console.log(arr);
console.log(arr2);

// __________Concat__________
console.log('Concat');

const newArr = [];

concat(arr, arr2);

function concat(first, second) {
    first.forEach(item => {
        newArr.splice(newArr.length, 0, item);

    });
    second.forEach(item => {
        newArr.splice(newArr.length, 0, item);
    });
}

console.log(newArr);