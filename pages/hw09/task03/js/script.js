// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radiusProp() {
        this.radius;
    }
    set radiusProp(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    area() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
    length() {
        return (Math.PI * this.radius * 2).toFixed(2);
    }
}

let ring = new Circle(7);

console.log(ring.radius);
console.log(ring.diameter);
console.log(ring.area());
console.log(ring.length());