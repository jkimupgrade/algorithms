let numberOfVowels = function(data) {
  // Put your solution here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelSum = 0;

  for (i = 0; i < data.length; i++) {
    // console.log(vowels.includes(data[i]));
    if (vowels.includes(data[i])) {
      vowelSum += 1;
    }
  }
  return vowelSum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));