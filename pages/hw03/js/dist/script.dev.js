"use strict";

// __________TaskOne__________
var inputOne = document.querySelector('#inputOne'),
    btnOne = document.querySelector('#btnOne');
btnOne.addEventListener('click', function () {
  var charMass = inputOne.value.toLowerCase().split('');

  var find = function find(charMass) {
    var answer = charMass.reduce(function (acc, el) {
      acc[el] ? acc[el]++ : acc[el] = 1;
      return acc;
    }, {});
    console.log(answer);
    var count = 0;

    for (var key in answer) {
      count = answer[key] > 1 ? count + 1 : count;
    }

    console.log(count);
    alert("\u0412\u0441\u044C\u043E\u0433\u043E \u0454\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u044E\u0442\u044C\u0441\u044F ".concat(count));
  };

  find(charMass);
}); // __________TaskOne__________

var inputTwo = document.querySelector('#inputTwo'),
    btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', function () {
  var DNA = inputTwo.value;
  var newDNA = DNA.replace(/[a, t, d, c]/gi, function (item) {
    if (item == 't') {
      return 'A';
    }

    if (item == 'a') {
      return 'T';
    }

    if (item == 'd') {
      return 'C';
    }

    if (item == 'c') {
      return 'D';
    }
  });
  alert("\u0414\u0440\u0443\u0433\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0414\u041D\u041A: ".concat(newDNA));
}); // __________TaskOne__________

var inputThree = document.querySelector('#inputThree'),
    btnThree = document.querySelector('#btnThree');
btnThree.addEventListener('click', function () {
  function findShort(str) {
    var wordsArr = str.split(' ');
    var wordsLenght = [];
    wordsArr.forEach(function (item) {
      wordsLenght.push(item.length);
    });
    return Math.min.apply(Math, wordsLenght);
  }

  findShort(inputThree.value);
  console.log(findShort(inputThree.value));
});
var stringWithNum = prompt('Enter a string where words must contain one num between (1-9):'); // const []

function getOrderedString(numString) {
  var strArr = numString.split(' ');
  strArr.forEach(function (element) {
    element.includes;
  });
  console.log(strArr);
}

getOrderedString(stringWithNum);