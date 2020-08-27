// __________TaskOne__________

const inputOne = document.querySelector('#inputOne'),
    btnOne = document.querySelector('#btnOne');

btnOne.addEventListener('click', () => {
    const charMass = inputOne.value.toLowerCase().split('');

    const find = (charMass) => {
        const answer = charMass.reduce((acc, el) => {
            (acc[el]) ? acc[el]++: acc[el] = 1;

            return acc;
        }, {});
        console.log(answer)

        let count = 0;

        for (let key in answer) {
            count = answer[key] > 1 ? count + 1 : count;
        }
        console.log(count)

        alert(`Всього єлементів, що повторюються ${count}`)
    };
    find(charMass)
});


// __________TaskOne__________

const inputTwo = document.querySelector('#inputTwo'),
    btnTwo = document.querySelector('#btnTwo');

btnTwo.addEventListener('click', () => {
    const DNA = inputTwo.value;

    const newDNA = DNA.replace(/[a, t, d, c]/gi, (item) => {
        if (item == 't') {
            return 'A'
        }
        if (item == 'a') {
            return 'T'
        }
        if (item == 'd') {
            return 'C'
        }
        if (item == 'c') {
            return 'D'
        }
    })

    alert(`Друга сторона ДНК: ${newDNA}`)
});

// __________TaskOne__________

const inputThree = document.querySelector('#inputThree'),
    btnThree = document.querySelector('#btnThree');

btnThree.addEventListener('click', () => {

    function findShort(str) {
        const wordsArr = str.split(' ');
        let wordsLenght = [];

        wordsArr.forEach(item => {
            wordsLenght.push(item.length);
        });
        return Math.min(...wordsLenght);
    }

    findShort(inputThree.value)

    console.log(findShort(inputThree.value))
})


let stringWithNum = prompt('Enter a string where words must contain one num between (1-9):');
// const []

function getOrderedString(numString) {
    let strArr = numString.split(' ');
    strArr.forEach(element => {
        element.includes
    });
    console.log(strArr);

}

getOrderedString(stringWithNum);