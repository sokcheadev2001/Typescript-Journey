class Employee {
  name: string;
  salary: number;
  constructor(n: string, s: number) {
    this.name = n;
    this.salary = s;
  }

  total() {
    console.log(this.name + " has " + this.salary + "$");
  }
}

const sao = new Employee("sokchea", 1500);
sao.total;
