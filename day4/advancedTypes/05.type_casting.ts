// One
const userInputElement = <HTMLInputElement>document.getElementById("hello");

// Two
const emailInputElement = document.getElementById("email") as HTMLInputElement;

userInputElement.value = "Hello";
emailInputElement.value = "sokchea@gmail.com";

// Index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  //  cannot be type number
  email: "leang.sokchea13@gmail.com",
  password: "password is not a strong password",
};
