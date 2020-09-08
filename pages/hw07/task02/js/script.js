// __________TwoOne__________

const caseInput = document.querySelector('.input__case'),
    result = document.querySelector('.result');

document.querySelector('.btn__case').addEventListener('click', () => {
    result.value = '';

    const caseValue = caseInput.value.split('');

    let chars = '';

    for (let i = 0; i < caseValue.length; i++) {
        chars += (caseValue[i - 1] == '-') ? caseValue[i].toUpperCase() : caseValue[i];
    }

    let camelCase = chars.split('-').join('');

    result.textContent = `${camelCase}`;
});

document.querySelector('.btn__caseClear').addEventListener('click', () => {
    caseInput.value = ''
});

// __________TwoTwo__________

const abb = document.querySelector('.abb');

document.querySelector('.btn__abb').addEventListener('click', () => {
    result.value = '';

    const abbValue = abb.value.split('');

    let charsAbb = '';

    for (let i = 0; i < abbValue.length; i++) {
        charsAbb += (abbValue[i - 1] == null || abbValue[i - 1] == ' ' || abbValue[i - 1] == '-') ? abbValue[i].toUpperCase() : '';
    }

    result.textContent = `${charsAbb}`;
});

document.querySelector('.btn__abbClear').addEventListener('click', () => {
    abb.value = ''
});


// __________TwoThree__________

const link = document.querySelector('.link');

document.querySelector('.btn__link').addEventListener('click', () => {

    result.value = '';

    const linkValue = link.value,
        protocol = linkValue.split(/:\//),
        domain = linkValue.split(/\//),
        way = linkValue.split(/.com/);

    result.innerHTML = `<div><b>Protocol</b>: ${protocol[0]};</div>
                        <div><b>Domain</b>: ${domain[2]};</div>
                        <div><b>Way</b>: ${way[1]};</div>`

});

document.querySelector('.btn__linkClear').addEventListener('click', () => {
    link.value = ''
});