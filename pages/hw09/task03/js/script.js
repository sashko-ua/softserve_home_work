// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.


const input = document.querySelector('.taskThree__input'),
    result = document.querySelector('.taskThree__result');


document.querySelector('.taskThree__btn').addEventListener('click', () => {
    let ring = new Circle(input.value);

    result.innerHTML = `<div class="text">Радіус кола: ${ring.radius} см; <br> Діаметр кола: ${ring.diameter} см; <br> Площа кола: ${ring.area()} cм<sup>2</sup>; <br> Довдина кола: ${ring.length()} см;</div>`

});
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radiusProp() {
        this._radius;
    }
    set radiusProp(_radius) {
        this._radius = _radius;
    }
    get diameter() {
        return this._radius * 2;
    }
    area() {
        return (Math.PI * this._radius * this._radius).toFixed(2);
    }
    length() {
        return (Math.PI * this._radius * 2).toFixed(2);
    }
}