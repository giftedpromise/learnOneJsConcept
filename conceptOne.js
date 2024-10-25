//Variables and Constants - let, const, and var usage.

//1. let
// Block-scoped: let variables are limited to the block, statement, or expression where they are defined.
// Mutable: You can change the value of a let variable after declaring it.
// Cannot be redeclared: You cannot declare a let variable with the same name within the same scope.

let name = "Alice";

name = "Bob"; //You can change the value

console.log(name);

if (true) {
  let age = 23;
  console.log(age);
}

//console.log(age);

//  2. const
// Block-scoped: Similar to let, const is limited to the block where it is declared.
// Immutable: Once assigned, the value of a const variable cannot be changed.
// Must be initialized: You must assign a value to a const variable when you declare it.

const pi = 3.14;
console.log(pi); // Output: 3.14

//pi = 3.1415; //  Error: Assignment to constant variable

// With objects, `const` protects the reference but not the contents

const person = { name: "Alice" };
person.name = "Bob"; // Allowed because we're modifying the object's property, not reassigning `person`
console.log(person.name); // Output: 'Bob'
