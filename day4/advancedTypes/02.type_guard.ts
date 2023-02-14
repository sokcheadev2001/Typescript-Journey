type SuperUser = {
  name: string;
  priviledges: string[];
};

type User = {
  name: string;
  startDate: Date;
};

//  intersection type
type ElevatedUser = SuperUser & User;

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function Add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknowUser = SuperUser | User;

function printUserInformation(user: UnknowUser) {
  console.log("Username: " + user.name);
  if ("priviledges" in user) {
    console.log("Priviledges: " + user.priviledges);
  }
  if ("startDate" in user) {
    console.log("Start Date: " + user.startDate);
  }
}

let user: ElevatedUser = {
  name: "Bill Gates",
  priviledges: ["Foundation"],
  startDate: new Date(),
};

printUserInformation(user);
