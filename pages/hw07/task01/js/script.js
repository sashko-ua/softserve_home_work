'use strict';

const morseABC = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-",
        "sos": "...---...",
        " ": "",
    },
    input = document.querySelector('.morze'),
    decoder = document.querySelector('.decoder'),
    clear = document.querySelector('.clear'),
    normalText = document.querySelector('.decoderResult');

decoder.addEventListener('click', () => {
    let morzeWords = input.value.split(' ').flat(),
        result;

    decoder(morzeWords);

    function decoder(e) {
        result = e.map(element => {
            for (let key in morseABC) {
                if (morseABC[key] == element) {
                    return key
                }
            }
        });
        console.log(result.join(''));
    }

    normalText.innerText = `${result.join('')}`

});

clear.addEventListener('click', () => {
    decoder.value = '';
})