interface Greetable {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Greeting implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: Greetable;
user2 = new Greeting("SOkchea", 22);
user2.greet("Hi there i am");
