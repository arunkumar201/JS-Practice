function* generate() {
	let result = yield;
	console.log(`result is ${result}`);
}

let g = generate();
// console.log(g.next());

// console.log(g.next(1000));
//output
/*
{ value: undefined, done: false }
result is 1000
{ value: undefined, done: true }
*/
function* baz() {
	let arr = [yield, yield];
	console.log(arr);
}

var z = baz();

console.log(z.next());
console.log(z.next(1));
console.log(z.next(2));
function* yieldArray() {
	yield 1;
	yield [20, 30, 40];
}

let y = yieldArray();

console.log(y.next());
console.log(y.next());
console.log(y.next());
