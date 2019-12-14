// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
const longest = (s1, s2) => {
  // join the two strings, convert to array, sort alphabetically
  const arr = s1.concat(s2).split('').sort();
  // remove duplicate letters by creating a Set object
  const set = new Set(arr);
  // convert back to array and join to return a string
  return Array.from(set).join('');
}


// Test
const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
const test1 = longest(a, b) // -> "abcdefklmopqwxy"

const c = "abcdefghijklmnopqrstuvwxyz"
const test2 = longest(c, c) // -> "abcdefghijklmnopqrstuvwxyz"