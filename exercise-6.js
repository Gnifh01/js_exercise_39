class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(area) {
    this.area = area;
  }

  static calculate(value) {
    switch (value) {
      case square:
        return `L'Area del Quadrato è: ${square.side * 4}`;

      case rectangle:
        return `L'Area del Rettangolo è: ${(rectangle.width * rectangle.height) / 2}`;

      case circle:
        return `L'Area del Cerchio è: ${(Math.pow(circle.radius, 2) * Math.PI).toFixed(2)}`;

      default:
        console.log("La figura inserita non è presente nel codice");
      break;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
