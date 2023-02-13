class Shape {
  //  Use protected to make accessible for child class
  constructor(
    protected name: string,
    protected width: number,
    protected height: number
  ) {}
  describe() {
    console.log(this.width, this.height);
  }
}

class Triangle extends Shape {
  constructor(name: string, width: number, height: number) {
    super(name, width, height);
  }

  totalSquare() {
    return this.width * this.height;
  }

  printTotal() {
    let total = this.totalSquare();
    console.log(`${this.name} has ${total} cm`);
  }
}

const triangle = new Triangle("Triangle", 100, 200);
triangle.printTotal();
