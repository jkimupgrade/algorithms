const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;

  values.forEach(function(element){
    if (condition === 'even') {
      if (element % 2 === 0){
        sum += element;
      }
    }
    if (condition === 'odd') {
      if (element % 2 != 0) {
        sum += element;
      }
    }
  }) 
return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));