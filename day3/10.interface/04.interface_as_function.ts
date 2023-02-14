// custom function with type alias
// type addFn = (a: number, b: number) => number;

// when we change to interface it has a custom function syntax
interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(5, 6));
