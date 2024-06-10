class Rectangle {
  #width;
  #height;

  constructor(color, height, width) {
    this.color = color;
    this.#height = height;
    this.#width = width;
  }

  static getShapeType() {
    return Rectangle;
  }

  get getWidth() {
    return this.#width;
  }

  set setWidth(newWidth) {
    return this.#width = newWidth
  }

  get getHeight() {
    return this.#height;
  }

  set setHeight(newHeight) {
    return this.#height = newHeight
    }
  

  getArea() {
    return this.#height * this.#width;
  }

  describe() {
    console.log(
      `color: ${this.color}, width: ${this.#width}, height: ${this.#height}`
    );
  }
}

const rectangle1 = new Rectangle("pink", 10, 20);

console.log(rectangle1.getArea());
rectangle1.describe();
rectangle1.getArea()
console.log(Rectangle.getShapeType())
console.log(rectangle1.getWidth)
console.log(rectangle1.getHeight)

rectangle1.setHeight = 30
console.log(rectangle1.getHeight)

rectangle1.setWidth = 12
console.log(rectangle1.getWidth)
