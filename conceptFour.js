/*
Comparison operators in JavaScript are used to compare values. They evaluate to either true or false, allowing you to make logical decisions in your code. Here’s a breakdown of each operator:

1. Equality (==)
Compares two values for equality after performing type coercion (converting them to the same type if needed).
Use with caution, as it can lead to unexpected results due to type coercion.
*/

console.log(5 == "5"); // Output: true (type coercion occurs)
console.log(0 == false); // Output: true (0 and false are considered equal)

// console.log(5 === "5");      // Output: false (no type coercion, so they are not equal)
console.log(0 === false); // Output: false (different types)

// 3. Inequality (!=)
// Checks if two values are not equal, performing type coercion if necessary.
// Like ==, it can yield unexpected results due to type conversion.
console.log(5 != "5"); // Output: false (type coercion makes them equal)
console.log(0 != false); // Output: false

// 4. Strict Inequality (!==)
// Checks if values are not equal, considering both type and value without type coercion.
// Preferred over != when you need to avoid automatic type conversion.
console.log(5 !== "5"); // Output: true (no type coercion, so they are different)
console.log(0 !== false); // Output: true (different types)

//5. Greater Than (>)
//Checks if the value on the left is greater than the value on the right.
console.log(10 > 5); // Output: true
console.log(5 > 10); // Output: false

//6. Less Than (<)
//Checks if the value on the left is less than the value on the right.
console.log(5 < 10); // Output: true
console.log(10 < 5); // Output: false

// 7. Greater Than or Equal To (>=)
// Checks if the value on the left is greater than or equal to the value on the right.
console.log(10 >= 10); // Output: true
console.log(5 >= 10); // Output: false

// 8. Less Than or Equal To (<=)
// Checks if the value on the left is less than or equal to the value on the right.
console.log(5 <= 10); // Output: true
console.log(10 <= 10); // Output: true
