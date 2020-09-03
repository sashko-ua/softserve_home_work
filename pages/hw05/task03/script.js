'use strict';

const fructs = ['Apple', 'Banana', 'Pineapple'];

// __________Map at Reduce__________

console.log('Map at Reduce');

const map = fructs.reduce((acc, el) => [...acc, el[0]], []);

console.log(fructs);
console.log('');

// __________Filter at Reduce__________

console.log('Filter at Reduce');

const filter = fructs.reduce((acc, el) => {
    // (el[0].toUpperCase() == 'P') ?
    // return [el]: return [el]

    if (el[0].toUpperCase() == 'P') {
        return [el]
    }
}, []);

console.log(filter);
console.log('');

// __________ForEach at Reduce__________

console.log('ForEach at Reduce');

fructs.reduce((acc, el, i) => console.log(`>>> ${++i}: ${el} <<<`), []);