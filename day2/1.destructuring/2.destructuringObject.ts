//  simple js object
const Person = {
  name: "Sochea",
  age: 22,
};

//  getting object value
//  method 1

let Name = Person.name;
let Age = Person.age;

//  method 2
let AnotherName = Person["name"];
let AnotherAge = Person["age"];

//  With Destructuring
const obj = { a: 1, b: 2 };

const { a, b } = obj;
console.log(a, b);

//  Example with destructuring
interface Student {
  name: string;
  grade: string;
}
const display = ({ name, grade }: Student) => {
  console.log(`${name} is studying in ${grade}`);
};

const niset = {
  name: "sokchea",
  grade: "M6",
};

display(niset);
