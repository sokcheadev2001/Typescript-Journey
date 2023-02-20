// use constraint to make generic more restrict
function objectMerge<T extends object, U extends object>(array1: T, array2: U) {
  return Object.assign(array1, array2);
}

const mergedObject = objectMerge({ name: string }, { age: 22 });
