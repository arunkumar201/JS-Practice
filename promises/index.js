/**
 * Output:
 * 1 -just a console.log so they ,execute right away
 * 7  -same 
 * 3
 * 5
 * 2
 * 6
 * 4
 * 
 * Microtask queue -where Promise 
 * callbacks sit and have higher priority then macro queue
 * [
 * val => console.log(val+1)
 * () => console.log(3), -- this will get executed just after console.logs
 * setTimeout(() => console.log(4) -then this line (so settime goes inside the macro task queue 
 * and waiting for the execution)
 * () => console.log(5) - this will executed right away as it just doing logs 
//  * Now our micro task queue is empty the 
event loop will start picking the jobs from the macro task queue 
 * ]
 * MacroTask Queue -where setTimeout/interval 
 * callback sit and has lower priority than microtask queue 
 * [ 
 * () => console.log(2),- executed 1st
 * () => console.log(6)-  2nd
//  () => console.log(4) - last //comes from the microtask queue   
 * ]
 */

new Promise((res) => {
	console.log(8);
	return res(8); //here the resolve callback is get executed right away and then call push in the macro queue
}).then((val) => console.log(val + 1));

console.log(1);
setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));
console.log(7);

//Output - 1 7 3 5 2 6 4
//Output - 8 1 7 9 3 5 2 6 4
