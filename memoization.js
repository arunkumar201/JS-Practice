//create the memoization function
const memoizationFn = (fn) => {
	const cache = {};
	return function (...args) {
		const keyString = JSON.stringify(args);
		console.log(cache);
		//check if the key is in the cache
		if (keyString in cache) {
			console.log(`Using cache for ${keyString}`);
			//return the value from the cache
			return cache[keyString];
		} else {
			//calculate the value as key is not in the cache
			console.log(`Calculating for ${keyString}`);
			const result = fn(...args);
			//add the result to the cache
			cache[keyString] = result;

			return result;
		}
	};
};

//create add function
function add(a, b) {
	return a + b;
}
const sum = add(10, 20);
console.log(`The sum is ${sum}`);

//lets memoize the add function
// const memoizedAdd = memoizationFn(add);
// const sum2 = memoizedAdd(10, 20);
// console.log(`The sum is ${sum2}`);
// const sum3 = memoizedAdd(10, 20);
// console.log(`The sum is ${sum3}`);
// const sum4 = memoizedAdd(10, 20);

//heavy computation intensive function
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
//this is memoized version of fibonacci function
function fibonacci_memo_version(n, memo = {}) {
	if (n <= 1) return n;
	if (memo[n]) return memo[n];
	memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
	return memo[n];
}

//call without memoization
// console.time("fibonacci_without_memoization");
// console.log(fibonacci_memo_version(40));
// console.timeEnd("fibonacci_without_memoization");

//call with memoizationFn which is memoized version of fibonacci function based on argument
console.time("fibonacci_with_memoization");
const memoizedFibonacci = memoizationFn(fibonacci_memo_version);

console.log(memoizedFibonacci(30));
console.timeEnd("fibonacci_with_memoization");
console.log("----------------------------");
console.time("fibonacci_with_memoization");
console.log(memoizedFibonacci(30));
console.timeEnd("fibonacci_with_memoization");

//factorial recursive function
console.log("----------------------------");
const factorial = memoizationFn((n) => {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
});
console.time("factorial_with_memoization");
console.log(factorial(9));
console.log(factorial(8));
console.timeEnd("factorial_with_memoization");
