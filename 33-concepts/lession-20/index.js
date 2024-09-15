// Pure Functions, Side Effects, State Mutation, and Event Propagation

/**
 * Pure Functions
 *  A pure function is deterministic. 
 *   --- This means, that given the same input, the function will always return the same output. 
 * A pure function is a function that:
 * - Always returns the same output given the same inputs.
 * - Has no side effects (which means that it can’t alter any external state).
 *    ---  A side effect is any change in the system that is observable to the outside world.
 *      - Side effects can lead to bugs, inconsistency, and unexpected behavior.
 *         --eg.
 *              - Writing to a file, updating a database, making a network request, or modifying a global variable.
 *              - changing the file system
				- inserting a record into a database
				- making an http call
				- mutations
				- printing to the screen / logging
				- obtaining user input
				- querying the DOM
				-Math.random()
				- getting current time or date
				- accessing system state
				- setting timeouts, intervals, or event listeners,DOM manipulation, etc.
				- Any operation that changes the program's state or the environment.
 * - Does not modify the state of the program or the environment.
 * - Does not depend on any external state.
 * - Does not perform any I/O operations, network requests, or modify global variables.
 * Why Pure Functions are important?
 *    - Easier to test and debug.
 *    - Readability
 *    - A pure function is easier to reason about and predictable.
 */

/**
 What Are Observable Side Effects?
 - An observable side effect is any interaction with the outside world from within a function.
 * If a pure function calls a pure function this isn’t a side effect and the calling function is still pure.
	
	
 */

const add=(a, b) => a+b;

console.log(add(3, 5)); // Output: 8
console.log(add(3, 5)); // Output: 8 (same output for the same inputs)


//An impure function
const getUserDetails=() => {
	// Get user details from an API or database - based on current user session

	return {

	}
};
const fetchLoginDetails=getUserDetails();
//as fetchLoginDetails fun will not return the same output every time it's called 
//as sometime api server might down or return 500 error .so it's not pure.


// State Mutation
/***
 * State mutation is the process of modifying the state of an application. or 
 * state mutation refers to directly changing the value of a variable that holds the state of your application.
 * 
 */

// eg.
let count=0;
console.log(count);
const incrementCount=() => {
	count++;
};

incrementCount();
console.log(count); // Output: 1


//Event Propagation
/**
 * Event propagation is the process of propagating events from a parent element to its child elements.
 * Event propagation is the mechanism that allows elements to receive events from their parents.
 */
// eg.
const button=document.getElementById('myButton');
button.addEventListener('click', () => {
	alert("Button clicked")
	console.log('Button clicked');
});

const div=document.getElementById('myDiv');
div.addEventListener('click', (event) => {
	alert('div clicked');
	console.log('Div clicked');
	console.log('stopPropagation')
	event.stopPropagation();  //if we call event.stopPropagation() then event will not be propagated to parent elements.
});
// The event will be propagated to the parent element (button's parent div)

const myContainer=document.getElementById('container');
myContainer.addEventListener('click', (event) => {
	alert('Container clicked');
	console.log('Container clicked');
});
