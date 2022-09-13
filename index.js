class Shape{
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type
    }
}

class Triangle extends Shape {

    constructor(type, a, b, c) {
        super(type);
        this.a = a;
        this.b = b;
        this.c = c;

    }

    getPerimeter() {
        return this.a + this.b + this.c
    }
}

let shape = new Triangle('triangle', 1, 2, 4);

let type = shape.getType();
console.log(type);

let perimeter = shape.getPerimeter();
console.log(perimeter)

// Shape.prototype.
