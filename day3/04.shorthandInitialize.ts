class Animal {
  //  shorthand for initial property in constructor
  constructor(private id: string, private name: string) {}

  describe(this: Animal) {
    console.log(`Animal with id: ${this.id} is a ${this.name}`);
  }
}

const dog = new Animal("a001", "Dog");
dog.describe();
