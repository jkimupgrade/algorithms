const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let nameLength = [];
  for (i = 0; i < instructors.length; i++) {
    nameLength[i] = instructors[i].name.length;
  }
  let indexLongestName = nameLength.indexOf(Math.max(...nameLength));
  
  return instructors[indexLongestName];
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));