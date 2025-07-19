# JavaScript Utility Functions - Pseudocode Documentation

This repository contains a set of JavaScript functions performing common tasks on strings, arrays, and numbers. Each function includes a brief explanation of its logic.

---

## 1. Reverse a String

Function: reverseString(word)

- Split the string into individual characters
- Reverse the order of characters
- Join the characters back into a string
- Return the reversed string

---

## 2. Count Characters

Function: characterNumbers(word)

- Return the length of the given string

---

## 3. Capitalize Words

Function: capitalizeWords(sentence)

- Split the sentence into words by spaces
- For each word:
  - Capitalize the first letter
  - Append the remaining letters unchanged
- Join all words back into a sentence
- Return the capitalized sentence

---

## 4. Find Maximum and Minimum in Array

Function: findMax_min(arr)

- Find the maximum number using Math.max with spread operator
- Find the minimum number using Math.min with spread operator
- Return an array containing [max, min]

---

## 5. Sum of Array Elements

Function: sumArray(arr)

- Use reduce to accumulate the sum of all elements starting from 0
- Return the total sum

---

## 6. Filter Numbers from Mixed Array

Function: filterNumbers(arr)

- Filter the array to include only items of type number
- Return the filtered array

---

## 7. Factorial of a Number

Function: factorial(n)

- If n is 0 or 1, return 1
- Initialize factorialOfN to 1
- Loop from 2 to n, multiplying factorialOfN by current number each iteration
- Return factorialOfN

---

## 8. Check if Number is Prime

Function: isPrime(n)

- If n is less than or equal to 1, return false
- Loop from 2 to square root of n:
  - If n is divisible by any number in this range, return false
- If no divisors found, return true

---

## 9. Fibonacci Sequence

Function: fibonacci(n)

- If n is 0, return 0
- If n is 1, return 1
- Initialize array fibo with [0, 1]
- Loop from 2 to n:
  - Calculate fibo[i] as sum of fibo[i-1] and fibo[i-2]
- Return fibo[n]

---

## How to Use

- Copy these functions into a JavaScript file
- Call the functions with appropriate arguments to see results
- Use `console.log` to print outputs for testing
