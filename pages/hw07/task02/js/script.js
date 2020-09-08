// __________TwoOne__________

const caseInput = document.querySelector('.input__case'),
    resultCase = document.querySelector('.result__case');

document.querySelector('.btn__case').addEventListener('click', () => {
    resultCase.textContent = '';

    const caseValue = caseInput.value.split('');

    let chars = '';

    for (let i = 0; i < caseValue.length; i++) {
        chars += (caseValue[i - 1] == '-') ? caseValue[i].toUpperCase() : caseValue[i];
    }

    let camelCase = chars.split('-').join('');

    resultCase.textContent = `${camelCase}`;
});

// __________TwoTwo__________

const abb = document.querySelector('.abb'),
    resultAbb = document.querySelector('.result__abb');

document.querySelector('.btn__abb').addEventListener('click', () => {

    const abbValue = abb.value.split('');

    let charsAbb = '';

    for (let i = 0; i < abbValue.length; i++) {
        charsAbb += (abbValue[i - 1] == null || abbValue[i - 1] == ' ' || abbValue[i - 1] == '-') ? abbValue[i].toUpperCase() : '';
    }

    resultAbb.textContent = `${charsAbb}`
});