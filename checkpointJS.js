//Reverse a String

function reverseString(word) {
  return word.split("").reverse().join("");
}
console.log(reverseString("oussama"));

//Count Characters

function characterNumbers(word1) {
  return word1.length;
}
console.log(characterNumbers("oussama"));

//Capitalize Words

function capitalizeWords(sentence) {
  const word2 = sentence.split(" ");
  const capitalizedWords = word2.map(
    (word2) => word2.charAt(0).toUpperCase() + word2.slice(1)
  );
  return capitalizedWords.join(" ");
}
console.log(capitalizeWords("oussama latrech my "));

//Find Maximum and Minimum

function findMax_min(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return [max, min];
}
console.log(findMax_min([1, 3, 5, 9]));

//Sum of Array

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

//Filter Array

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}
console.log(filterNumbers(["Abc", 2, "h", 6]));

//Factorial of a given number

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let factorialOfN = 1;
  for (let i = 2; i <= n; i++) {
    factorialOfN = factorialOfN * i;
  }
  return factorialOfN;
}
console.log(factorial(9));

//CHeck if the number is prime or not

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(9));

//Fibonacci sequence

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
}
console.log(fibonacci(10));
