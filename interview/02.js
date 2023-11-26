/*
temporal dead zone in JavaScript"? If so, 
the temporal dead zone is related to the use of variables declared with the let and const keywords.
In JavaScript, when you declare a variable using let or const,
 the variable is hoisted to the top of its scope,
  but it's not initialized until the actual declaration statement is reached in the code.
   During the time between the hoisting and the declaration, 
   the variable is said to be in the "temporal dead zone."
Attempting to access the variable during this temporal dead zone
 results in a ReferenceError. 
*/

value = 12;
console.log("Value of Property" + value); //getting error can't access property before initialization

let value = "1cr";

console.log("Value of Property" + value);
