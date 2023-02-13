abstract class Staff {
  constructor(private firstName: string, private lastName: string) {}
  //    make an anstract method
  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeStaff extends Staff {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Staff {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}
//  abstract class cannot create an instance
// let employee = new Staff("John", "Doe");

let john = new FullTimeStaff("John", "Doe", 12000);
let jane = new Contractor("Jane", "Doe", 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
