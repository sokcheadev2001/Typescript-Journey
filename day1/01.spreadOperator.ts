const student = ["sok", "sav", "rak", "chea"];
const newStudent = ["buntha", "sai"];

//  no destructuring
student.push(newStudent[0], newStudent[1]);
console.log("Method 1: ", student);

//  with destructuring
student.push(...newStudent);
console.log("Method 2: ", student);

//  short way
const Exarray = ["el1", "el2", "el3", ...newStudent];
console.log(Exarray);
