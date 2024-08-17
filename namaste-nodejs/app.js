console.log("Hello World");

//global object
// console.log(global);

console.log(this); //{}

// console.log(window); //error - window is not defined in Node.js
console.log(globalThis); //reference to the global object (standard global object in ECMAScript 2020)

console.log(typeof window); //undefined
console.log(typeof globalThis); //object
console.log(typeof global); //object
console.log(global===globalThis); //true

