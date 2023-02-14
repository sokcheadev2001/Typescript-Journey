interface Events {
  name: string;
  description?: string;
  eventInformation(): void;
}

class Meeting implements Events {
  name: string;
  description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    if (description) {
      this.description = description;
    }
  }

  eventInformation(): void {
    if (!this.description) {
      console.log(this.name);
    } else {
      console.log(`${this.name} is about ${this.description}`);
    }
  }
}

const abc = new Meeting("Aba Meeting 2023");

abc.eventInformation();
