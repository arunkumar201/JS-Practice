
//https://www.youtube.com/watch?v=k5TC9i5HonI
//https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
const add=(a, b, c) => {
	return a + b + c;
};
console.log(add(1, 2, 3));

//using currying
const currying = (a) => {
	return (b) => {
		return (c) => {
			return a + b + c;
		};
	};
};
//es6
const curryingES6 = (a) => (b) => (c) => a + b + c;
console.log("ES6 way", curryingES6(1)(2)(3));

console.log("Normal way", currying(1)(2)(3));
//make fun more customizable for summing any number of arguments eg.10
//we do using recursive function
const currySum = (a) => {
	return (b) => {
		if (b === undefined) {
			// if no argument is provided, return the accumulated sum
			//if(b) that not works when we have 0 as parameter
			return a;
		}
		return currySum(a + b);
	};
};

console.log("Curried sum:", currySum(1)(20)(3)(4)(5)(6)(7)(8)(9)(10)(5)()); // Output: 55
console.log("Curried sum:", currySum(1)(2)(3)()); // Output: 6
console.log("Curried sum:", currySum(1)(2)(3)(4)()); // Output: 10
console.log("Curried sum:", currySum(10)(20)(30)(40)()); // Output: 100
