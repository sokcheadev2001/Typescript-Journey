class Programming {
  constructor(id: string, name: string, year: number) {}
}

class Php extends Programming {
  private static instance: Php;
  private constructor(id: string, name: string, year: number) {
    super(id, name, year);
  }

  static getInstance(): Php {
    if (Php.instance) {
      return this.instance;
    }

    this.instance = new Php("#001", "PHP", 2002);
    return this.instance;
  }
}

const php = Php.getInstance();
const php1 = Php.getInstance();
console.log(php === php1);
