/*
 Data or values have data types. Data types describe the characteristics of data. Data types can be divided into two:

1. Primitive data types
2. Non-primitive data types(Object References)

Primitive Data Types
Primitive data types in JavaScript include:
1.Numbers - Integers, floats
2. Strings - Any data under single quote, double quote or backtick quote
3. Booleans - true or false value
3. Null - empty value or no value
4. Undefined - a declared variable without a value
5. Symbol - A unique value that can be generated by Symbol constructor

Non-primitive data types in JavaScript includes:
1. Objects
2. Arrays

Primitive data types are immutable(non-modifiable) data types. 
Once a primitive data type is created we cannot modify it.

Non-Primitive Data Types
Non-primitive data types are modifiable or mutable. 
We can modify the value of non-primitive data types after it gets created.
1. String
A sequence of characters used to represent text.
Strings are enclosed in single ('), double ("), or backticks (`).
Common operations: concatenation, length, and various string methods (toUpperCase(), slice(), etc.).
*/

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

// Number
// Represents both integers and floating-point numbers.
// JavaScript does not differentiate between integer and decimal types; both are number.
// Special values: Infinity, -Infinity, and NaN (Not-a-Number).
//There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

let age = 25; // Integer
let price = 99.99; // Floating-point number
let sum = age + price; // Can perform arithmetic
console.log(sum); // Output: 124.99

console.log(10 / 0); // Output: Infinity
console.log("hello" * 3); // Output: NaN (Not a Number)

// 3. Boolean
// Represents a logical entity with only two possible values: true or false.
// Often used in conditional statements and comparisons.

let isAdult = true;
let hasPermission = false;
console.log(isAdult); // Output: true
console.log(5 > 3); // Output: true
console.log(10 < 5); // Output: false

// 4. Null
// Represents an intentional absence of value; a variable with null is explicitly set to "nothing" by the programmer.
// Often used to indicate that a variable has an empty or unknown value.
let selectedColor = null;
console.log(selectedColor); // Output: null

//5. The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:
let unassignedVar;
console.log(unassignedVar); // Output: undefined

let person = { name: "Alice" };
console.log(person.age); // Output: undefined (since 'age' is not defined)

// 6. Symbol (ES6)
// A unique and immutable primitive value often used as an identifier for object properties to avoid naming conflicts.
// Symbols are created using the Symbol() function, and each symbol is unique.

// 7.BigInt type was recently added to the language to represent integers of arbitrary length.

// A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
