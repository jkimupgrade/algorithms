const twoSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // console.log('-------------');
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        let temp = nums[i] + nums[j];
        // console.log(temp);
        if (temp === target && result.length === 0) {
          result.push(i, j);
        } 
      }
    }
  }
  return result;
};
// TEST
const test1 = twoSum([2, 7, 11, 15], 9);
console.log(test1); // <- [0, 1]

const test2 = twoSum([3, 2, 3], 6);
console.log(test2); // <- [0, 2]

const test3 = twoSum([-3, 4, 3, 90], 0);
console.log(test3); // <- [0, 2]