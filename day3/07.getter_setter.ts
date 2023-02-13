class Car {
  private collection: string[] = [];
  private brand: string;
  private year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  addCarToCollection(car: string) {
    this.collection.push(car);
  }

  printCarInformation() {
    console.log(`${this.brand} made in ${this.year}`);
  }
  printCarCollection() {
    console.log(this.collection);
  }
}

class Bmw extends Car {
  private price: number = 0;
  constructor(brand: string, year: number) {
    super(brand, year);
  }

  get Price() {
    if (this.price) return this.price;
    throw new Error("No Price Found");
  }

  set setPrice(price: number) {
    this.price = price;
  }

  printPrice() {
    super.printCarInformation();
    console.log(`${this.price}`);
  }
}

const i8 = new Bmw("i8", 2022);
i8.setPrice = 10000;
console.log(i8.Price);
