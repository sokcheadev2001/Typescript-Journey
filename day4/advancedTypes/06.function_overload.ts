type Combine = string | number;

//  *** function overloads ***
function plus(a: number, b: number): number;
function plus(a: number, b: string): string;
function plus(a: string, b: number): string;
function plus(a: string, b: string): string;
function plus(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 2);
const string = plus("sokchea", "leang");
//  split function not working if no overload function
//  because function return type is a string | number that split function will not available
string.split(" ");
