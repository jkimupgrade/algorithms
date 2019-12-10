// Given a 32-bit signed integer, reverse digits of an integer
const reverse = function(num) {
  let output = 0;
  let array = String(num).replace(new RegExp('0', 'g'), ' ').trim().split(''); // remove any leading and trailing zeros (any zeros inside are converted to space)
  
  for (let i = 0; i < array.length; i++) {
    (array[i] === ' ') ? array[i] = '0' : null;
  }
  if (array.includes('-')) {          // deal with negative numbers
    array.shift();
    array.reverse();
    array.unshift('-');
    output = array.join('');
  } else {                            // deal with positive numbers
    output = array.reverse().join('');
  }

  if (output > (Math.pow(2, 31) - 1) || output < Math.pow(-2, 31)) {
    return 0;
  } else {
    return output;
  }
};
// Test
const test1 = reverse(123);
console.log(test1); // <- 321

const test2 = reverse(-123);
console.log(test2); // <- -321

const test3 = reverse(120);
console.log(test3); // <- 21

const test4 = reverse(901000);
console.log(test4); // <- 109

const test5 = reverse(1534236469);
console.log(test5);