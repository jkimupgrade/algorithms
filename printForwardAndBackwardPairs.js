/** Problem 2: Print forward-and-backward pairs.
 * Write a function that does the following:
 * Take in a string
 *  1. print the first word and the last word on a line
 *  2. print the second word and the second last word on a line
 *  3. repeat the pattern until every word has been printed
 *      a. If there is an odd number of words, on the last line print just a single word.
 * Example 1:
 *  Input: The message here secret
 *  Output:
 *      The secret
 *      message here
 * Example 2:
 *  Input: The message here is secret
 *  Output:
 *      The secret
 *      message is
 *      here
 * Example 3:
 *  Input: There a message in text this hidden secret is
 *  Output:
 *      There is
 *      a secret
 *      message hidden
 *      in this
 *      text  */
// Function
const printForwardAndBackwardPairs = (string) => {
    // iterative thinking
    const arr = string.split(' ');
    // console.log("arr: ", arr);
    // const iter = Math.ceil(arr.length / 2);
    // for (let i = 0; i < iter; i++) {
    //     if (arr.length > 1) {
    //         console.log(`${arr[0]} ${arr[arr.length - 1]}`);
    //         arr.shift();
    //         arr.pop();
    //     } else console.log(arr[0]);
    // }
    // console.log('---')
    // recursive thinking
    // recursive case: string array length is greater than 1
    // base case: string array length is less than 1
    if (arr.length > 1) {
        console.log(`${arr[0]} ${arr[arr.length - 1]}`);
        arr.shift();
        arr.pop();
        printForwardAndBackwardPairs(arr.join(' '));
    } else {
        if (arr[0] !== '') console.log(arr[0]);
        console.log('---');
    }
}
// Test(s)
const test1 = printForwardAndBackwardPairs('The message here secret');
const test2 = printForwardAndBackwardPairs('The message here is secret');
const test3 = printForwardAndBackwardPairs('There a message in text this hidden secret is');