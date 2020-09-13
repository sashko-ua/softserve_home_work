// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера(зарезервированные слова);
// ■ поле, которое хранит количество чернил в маркере (число с плавающей запятой от 0 до 100);
// ■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// *Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера. Продемонстрировать работу написанных методов

const color = document.querySelector('.color'),
    percent = document.querySelector('.percent'),
    text = document.querySelector('.content'),
    resultText = document.querySelector('.resultText'),
    addPercent = document.querySelector('.addPercent');

document.querySelector('.changeText').addEventListener('click', () => {
    let marker = new FilledMarker(color.value, +percent.value);
    marker.fill(+addPercent.value);

    marker.print(text.value);
});

document.querySelector('.clear').addEventListener('click', () => {
    resultText.innerHTML = ''
});
class Marker {
    constructor(color, amount) {
        this.color = color;
        this.amount = amount;
    }

    print(line) {
        for (let i = 0; i < line.length; i++) {
            if (this.amount != 0) {
                if (line[i] == " ") {
                    this.amount += 0.5;
                }
                resultText.innerHTML += line[i];
                resultText.style.color = this.color;
                this.amount -= 0.5;
            } else {
                resultText.innerHTML += '<br><br><div class="text">Чорнила закінчилися, дозаправ!</div> <hr>'
                break
            }
        }
    }
}

class FilledMarker extends Marker {
    fill(amount) {
        if (amount > 100) {
            amount = 100;
        } else {
            this.amount += amount;
        }
    }
}