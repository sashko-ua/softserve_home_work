// __________TwoOne__________

const caseInput = document.querySelector('.input__case'),
    caseBtn = document.querySelector('.btn__case');

caseBtn.addEventListener('click', () => {
    caseValue = caseInput.value.split('');

    caseValue.forEach((element, index) => {
        if (element == '-') {

            let a = caseValue[++index];
            toString(a).toLocaleUpperCase();
            console.log(a)
        }

        return element
    });

    console.log(caseValue)
});

// __________TwoTwo__________