interface Truck {
  readonly model: string;
  truckInformation(price: number): void;
}

interface Machine extends Truck {
  power: string;
}

class Ford implements Machine {
  model: string;
  power: string;

  constructor(m: string, p: number, pw: string) {
    this.model = m;
    this.power = pw;
  }

  truckInformation(price: number): void {
    console.log(`${this.model} start price with $${price}`);
  }
}

const raptor = new Ford("Ford Raptor", 39999, "450-hp");

raptor.truckInformation(399999);
