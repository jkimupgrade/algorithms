/** Remove duplicate words from a sentence.
 * Write a function that does the following:
 * Take in a string, remove duplicate words from each sentence in the string, and print out the new string.
 * Example 1:
 * Input: Hello Hello, World!
 * Output: Hello, World!
 *
 * Example 2:
 * Input: Code Code! Nice Code
 * Output: Code! Nice Code ---> (needs confirmation)
 *
 * Example 3:
 * Input: Programming Code Programming!
 * Output: Programming Code! */
//  Function
const removeDuplicateWords = (sentence) => {
    if (sentence === '') return 'Please pass a non-empty string to the function!';
    return [...new Set(sentence.trim().split(/\b/))]
        .filter((word, idx, arr) => {
            // if following word includes punctuation, then trim current word
            if (arr[idx + 1] && arr[idx + 1].match(/[.,:!?]/)) return word.trim();
            return word;
        })
        .join('');
}
// Test(s)
const test1 = removeDuplicateWords('Hello Hello, World!');
console.log('test1: ', test1);

const test2 = removeDuplicateWords('Code Code! Nice Code');
console.log('test2: ', test2);

const test3 = removeDuplicateWords('Programming Code Programming!');
console.log('test3: ', test3);

const test4 = removeDuplicateWords(" Hello Hello, World! ");
console.log('test4: ', test4);

const test5 = removeDuplicateWords('');
console.log('test5: ', test5);