//  start with simple array
const myHobbies = ["coding", "tv show", "technology news", "travelling"];

//  let destructuring
const [hobby1, hobby2, ...remainHobby] = myHobbies;

//  expect result: coding, tv show
console.log(hobby1, hobby2);

//  expect result: [ 'technology news', 'travelling' ]
console.log(remainHobby);
//  We use destructuring to unpack or extract value from an array to another variable
//  Source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
