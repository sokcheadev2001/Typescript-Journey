//  old way
const addNumber = (num1: number, num2: number, num3: number) => {
  return num1 + num2 + num3;
};

console.log(addNumber(1, 2, 3));

//  modern way
const MaddNumber = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(MaddNumber(1, 2, 3, 4, 5, 6));
