let sumLargestNumbers = function(data) {
  // Put your solution here
  firstMax = Math.max(...data);
  data.splice(data.indexOf(firstMax), 1);
  secondMax = Math.max(...data);
  
  return firstMax + secondMax;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));