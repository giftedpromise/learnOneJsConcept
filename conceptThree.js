/*
Arithmetic operators in JavaScript allow you to perform mathematical calculations on numbers. Here’s a breakdown of each arithmetic operator and how it works:

1. Addition (+)
Adds two values together.
Can also be used for string concatenation if either operand is a string.
*/
let sum = 5 + 3; // Output: 8
let fullName = "John" + " Doe"; // Output: 'John Doe'

// 2. Subtraction (-)
// Subtracts the right operand from the left operand.
let difference = 10 - 4; // Output: 6

// 3. Multiplication (*)
// Multiplies two values.

let product = 2 * 3;

// 4. Division (/)
// Divides the left operand by the right operand.
// If dividing by zero, JavaScript returns Infinity or -Infinity (for negative dividends).
let quotient = 20 / 5; // Output: 4
let divideByZero = 10 / 0; // Output: Infinity

// 5. Modulus (%)
// Returns the remainder after dividing the left operand by the right operand.
// Useful for checking divisibility, cycling through values, etc.
let remainder = 10 % 3; // Output: 1 (since 10 ÷ 3 is 3 remainder 1)
let evenCheck = 10 % 2 === 0; // Output: true (10 is even)

// 6. Exponentiation (**) (ES6)
// Raises the left operand to the power of the right operand.
let power = 2 ** 3; // Output: 8 (2 raised to the power of 3)

// 7. Increment (++)
// Increases the value of a variable by 1.
// Can be used before or after the variable. If used before (++x), it increments first, then returns the value. If used after (x++),
// it returns the value, then increments.
let count = 5;
console.log(++count); // Output: 6 (pre-increment)
console.log(count++); // Output: 6 (post-increment)
console.log(count); // Output: 7

// 8. Decrement (--)
// Decreases the value of a variable by 1.
// Similar to ++, can be used before or after the variable.
let count1 = 5;
console.log(--count1); // Output: 4 (pre-decrement)
console.log(count1--); // Output: 4 (post-decrement)
console.log(count1); // Output: 3

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

let num = 5;

console.log(++num);
