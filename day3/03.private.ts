export default class Department {
  fullname: string;
  employees: string[] = [];

  constructor(fn: string) {
    this.fullname = fn;
  }

  describe(this: Department) {
    console.log("Department: " + this.fullname);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Sok");
accounting.addEmployee("Chea");

accounting.employees[2] = "Bad Input";
//   We can access property directly, that make it a bad call
//  *** To solve this we need to change the property to private ***
//  employees: string[] = []; => private employees: string[] = [];

accounting.printEmployeeInformation();
