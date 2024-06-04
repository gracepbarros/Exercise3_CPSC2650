class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot construct Shape instances directly");
    }
  }
  area() {
    throw new Error("Method 'area' must be implemented");
  }
  perimeter() {
    throw new Error("Method 'perimeter' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    if (radius <= 0) {
      throw new Error("Radius must be positive");
    }
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = value;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    if (width <= 0 || height <= 0) {
      throw new Error("Both width and height must be positive");
    }
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  get width() {
    return this._width;
  }
  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be positive");
    }
    this._width = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    if (value <= 0) {
      throw new Error("Height must be positive");
    }
    this._height = value;
  }
}
