// IIFE - Immediately Invoked Function Expression
//used to create a new scope and prevent global pollution
(function () {
	// This code is only accessible within this function

	// Declare a variable
	var myName = "John Doe";
	// Log the variable
	console.log(myName);
})();

// console.log(myName); // This will throw an error because name is not accessible outside this function
//IIFE is a js function that executes as soon as it is defined
//also known as self-executing function or anonymous function
//or self-invoked anonymous function

/*
it is a design pattern used to encapsulate code and prevent pollution of the global namespace.
which also known as self executing anonymous function

it mainly contains two parts:

1. first is the anonymous function with lexical scoping enclosing within the 
group-operator '()' ,this prevents the variable from being accessible outside of the function.

2. Second is the parentheses '()' that execute the anonymous function immediately.
*/

//Syntax:
(() => {
	console.log("this is an anonymous IIFE");
})();
(async () => {
	//do some async work here
	console.log("this is an async anonymous IIFE");
})();

(function () {
	console.log("this is a regular IIFE");
})();
(async function () {
	//do some async work here
	console.log("this is an async regular IIFE");
})();

(function () {
	console.log("this is a block IIFE");
})();

+(function () {
	console.log("this is a block IIFE- using " + "plus");
})();

-(function () {
	console.log("this is a block IIFE- using " + "minus");
})();

void (function () {
	console.log("this is a void IIFE");
})();
new function () {
	console.log("this is a new function IIFE");
}()
//use cases
// 1.Avoid polluting the global namespace - IIFE can be used to create a new scope for variables and functions.

(function () {
	var age = 23;
	var userName = "Arun";
	console.log(age); //23
	console.log(userName); //Arun
})();
//after the function execution, age & userName is not accessible or they will be discarded.
// age & userName is not accessible outside this function
// console.log(age); //error
//console.log(userName); //error

// 2.Execute an async function-like code immediately - IIFE can be used to execute an async function immediately.
const userInfo = (async () => {
	const response = await fetch("https://api.example.com/user");
	const data = await response.json();
	console.log(data);
	return data;
})();
console.log(userInfo);

//We would also use IIFE to create private and public variables and methods.
//eg
const myObject = (() => {
	let privateVariable = "Hello";

	const publicMethod = () => {
		console.log(privateVariable);
	};

	return {
		publicMethod,
	};
})();
myObject.publicMethod(); //Hello
