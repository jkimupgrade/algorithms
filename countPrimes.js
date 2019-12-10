// Count the number of prime numbers less than a non-negatvie number, n
const countPrimes = function(n) {
  let prime = 0;

  for (let i = 2; i < n; i++) {
    (isPrime(i)) ? prime += 1 : null;
  }
  return prime;
};
const isPrime = function(num) {
  for (let i = 2; i <= Math.ceil(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // 1 is not a prime number
};

// Test
const test1 = countPrimes(10); console.log(test1); // <- 4
const test2 = countPrimes(50); console.log(test2); // <- 15
const test3 = countPrimes(100000); console.log(test3); // <- 9592