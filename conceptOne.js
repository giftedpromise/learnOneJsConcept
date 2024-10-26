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
// var
// Function-scoped: var variables are accessible throughout the function in which they are declared. If declared outside of any function, var becomes globally scoped.
// Hoisted: var declarations are “hoisted” to the top of their scope. This means they are treated as if they were declared at the top of the function or global scope, but without an initial value.
// Redeclarable: You can declare a var variable multiple times within the same scope.

var city = "New York";
var city = "Los Angeles"; // ✅ You can redeclare with `var`
console.log(city); // Output: 'Los Angeles'

// Hoisting example
console.log(greeting); // Output: undefined (declaration is hoisted, but not the value)
var greeting = "Hello";

//Key take away: You can redeclare and reassign var, you cannot redeclare let and const,
//you can reassign let but you cannot reassign const.

//Tasks

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let myName;

myName = "John";
admin = myName;
console.log(admin);

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let ourPlanetName = "earth";
currentUserName = "James";
