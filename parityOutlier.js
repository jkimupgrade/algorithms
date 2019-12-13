// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.
const findOutlier = integers => {
  const even = integers.filter(elem => elem % 2 === 0);
  const odd = integers.filter(elem => elem % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
}


// Test
const test1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const result1 = findOutlier(test1);
console.log('result1', result1);

const test2 = [160, 3, 1719, 19, 11, 13, -21];
const result2 = findOutlier(test2);
console.log('result2', result2);

const test3 = [0, 1, 2];
const result3 = findOutlier(test3);
console.log('result3', result3);