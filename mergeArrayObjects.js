const mergeArrayObjects = (arrA, arrB) => {
 return arrA.map((item, index) => {
    if (item.id === arrB[index].id) {
      // method 1 to return all key-value pairs
      return {...item, ...arrB[index]}
      // method 2 to return all key-value pairs
      // Object.assin() method is used to copy the values of all enumerable own properties
      // from one or more source objects to a target object. It will return the target object
      return Object.assign({}, item, arrB[index]);
      // if 'name' key is not desired
      const result = {...item, ...arrB[index]};
      delete result.name;
      return result;
    }
  })
}


// test
const arrayA = [
  {id: 'A1', name: 'propertyA'},
  {id: 'B1', name: 'propertyB'},
  {id: 'C1', name: 'propertyC'},
  {id: 'D1', name: 'propertyD'},
  {id: 'E1', name: 'propertyE'}
];

const arrayB = [
  {id: 'A1', property: 'addressA'},
  {id: 'B1', property: 'addressB'},
  {id: 'C1', property: 'addressC'},
  {id: 'D1', property: 'addressD'},
  {id: 'E1', property: 'addressE'}
];

const test = mergeArrayObjects(arrayA, arrayB);
console.log(test);
