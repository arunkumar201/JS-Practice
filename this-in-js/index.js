// in strict mode 'this' keyword refers to undefined inside the regular function else window object
// "use strict";

// in js 'this' is a keyword that refers an object but
// object is depends on how it is called
//or behaves differently in different contexts.

// 1.global context
// - in global execution context 'this' refers to the global object.
// in browser this is 'window' object or in Node.js it's 'global' object.

// eg.
console.log(this); // In a browser, this will log the Window object
console.log(this === window); // true

var a = 5;
console.log(this.a); // 5

// 2. Regular function context
// - in regular function execution context 'this' refers to the global object (in not-strict mode) or undefined (in strict mode).
function displayThis() {
	console.log("in displayThis function", this); // in a regular function, this refers to the global object or undefined in strict mode
}
displayThis(); // logs: Window or undefined(in non-strict mode)
window.displayThis(); // logs: Window in strict mode, logs: Window in non-strict mode

// 3.Object method context
// - in object method execution context 'this' refers to the object.
// - or  When this is used inside an object's method, this refers to the object it lies within.
const obj = {
	name: "John",
	age: 30,
	greet: function () {
		console.log(
			`Hello, my name is ${this.name} and I am ${this.age} years old.`
		);
	},
};
obj.greet(); // logs: Hello, my name is John and I am 30 years old.

//student object example
const student = {
	name: "John Doe",
	age: 25,
	major: "Computer Science",
	displayDetails: function (...args) {
		console.log("Displaying details for student:", args);
		console.log(`Name: ${this.name}`);
		console.log(`Age: ${this.age}`);
		console.log(`Major: ${this.major}`);
	},
};
// student.displayDetails(); // logs: Name: John Doe, Age: 25, Major: Computer Science
// we have another student object
const student2 = {
	name: "Jane Doe",
	age: 30,
	major: "Mathematics",
};
// student2.displayDetails(); //student2.displayDetails is not a function
// //call, apply, or bind methods are used to change the context of 'this'
// student.displayDetails.call(student2, 1, 2, 3, 4); // logs: Name: Jane Doe, Age: 30, Major: Mathematics
// student.displayDetails.apply(student2, [12, 3, 4, 5]); // logs: Name: Jane Doe, Age:mathematics,
// const displayDetailsBound = student.displayDetails.bind(student2);
// displayDetailsBound("Bind Method", 7, 8); // logs: Name: Jane Doe, Age: 30, Major: Mathematics
// 4. Arrow function context
// - in arrow function execution context 'this' refers to the enclosing context or parent scope.
//  as an arrow function does not have its own 'this', it uses the 'this' value from its parent scope or surrounding lexical scope.
const person = {
	name: "Jack",
	age: 25,

	// this inside method
	// this refers to the object itself
	greet() {
		console.log(this);
		console.log(this.age);
		// inner function
		let innerFunc = () => {
			console.log("inside inner function", this);
			console.log(this.age);
		};

		innerFunc();
	},
	arrowGreet: () => {
		//this refers to the GLobal object as this does not have its own 'this'
		console.log("this inside arrow function", this);
	},
};

person.greet();
person.arrowGreet();

// 5. Constructor context
// - in constructor execution context 'this' refers to the newly created object.
function Student(name, age, major) {
	this.name = name;
	this.age = age;
	this.major = major;
	this.displayDetails = function () {
		console.log(`Name: ${this.name}`);
		console.log(`Age: ${this.age}`);
		console.log(`Major: ${this.major}`);
	};
}

const student1 = new Student("John Doe", 25, "Computer Science");
student1.displayDetails(); // logs: Name: John Doe, Age: 25, Major: Computer Science

// 6.Event handler context
// - in event handler execution context 'this' refers to the element that the event handler is attached to.
// eg.
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
	console.log("this inside event handler", this);
	console.log("this inside event handler", this.tagName);
});

/*

In the global context, this refers to the global object.
In a function, this refers to the global object (or undefined in strict mode).
In an object method, this refers to the object.
In a constructor function, this refers to the new object.
Arrow functions inherit this from their enclosing context.
call(), apply(), and bind() methods allow explicit setting of this.

What is the difference between call, apply, and bind?
call() and apply() invoke the function immediately with a specified this context, 
but apply() accepts arguments as an array, whereas call() accepts a comma-separated list. 
bind() returns a new function with the specified this context, 
without invoking the function immediately.
*/
