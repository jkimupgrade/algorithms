// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
const findOdd = A => {
  // store the counts of the numbers in an object
  const obj = A.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  // return the key that has an odd number for its value
  for (key in obj) {
    if (obj[key] % 2 !== 0) {
      return Number(key);
    }
  }
  // concise and cool solution
  // return A.reduce((acc, cur) => acc ^ cur);
}


// Test
const test1 = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
console.log('test1', test1); // -> 5