function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ age: 30 }, { name: "Max" });
console.log(mergedObj);
