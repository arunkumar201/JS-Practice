// Pollyfill for Filter 
/**
 * Filter method is used to create a new array with all elements that pass the test implemented by the provided function.
 */

const nums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 8, 67, 67];
//let - i want only even numbers, as filter always returns a new array with elements that pass the test
//it will take a callback - (element, index, array)=>boolean
let evenNums=nums.filter((num, index, arr) => {
	if (num%2===0) {
		return true; // if number is even, add it to the new array (handle by filter)
	}
	return false; // if number is not even, do not add it to the new array (handle by filter)

});
console.log("using native filter method", evenNums);

// Now lets create own implementation of filter using for loop and push method
Array.prototype.myFilter=function (callback) {
	let newArr=[]; //as filter returns a new array
	//now we need to iterate over each element in the array and test the condition
	//here this points to the Array where myFilter is  being called
	for (let i=0;i<this.length;i++) {
		//as we pass the callback function to filter, it will be called with current element, index and array
		if (callback(this[i], i, this)) { //(element,index,arr)=>boolean - based on condition result will add the element to new array
			newArr.push(this[i]); // if condition is true, add the element to new array
		}
	}
	return newArr; // return the new array
}

let evenNums2=nums.myFilter((num, index, arr) => {
	return num%2===0; // if number is even, add it to the new array (handle by myFilter)
})
console.log("using custom filter method", evenNums2);


//Pollyfill for Map
/**
 * Map - this method used creates a new array by calling a function on every element of the original array and 
 * storing the results in a new array.this method does not change the original array and returns a new array.
 */
let doubleNums=nums.map((num, index, arr) => {
	return num*2; // will double each number
});
console.log("original Array Map", nums);
console.log("Double the numbers using native map method", doubleNums);

// as it has to be returns new array, and also not change original array,
//taking callback function (num,index,arr)=>num;
Array.prototype.myMap=function (callback) {
	let newArr=[];
	for (let i=0;i<this.length;i++) {
		// will call the callback function on each element and it return modify result for each element
		const newModifyItem=callback(this[i], i, this);
		newArr.push(newModifyItem);
	}
	return newArr; // return the new array
}

let doubleNums2=nums.myMap((num, index, arr) => {
	return num*2; // will double each number
});
console.log("original Array Map", nums);
console.log("Double the numbers using custom map method", doubleNums2);

//Pollyfill for forEach
//print the array items

console.log(`--------------forEach--------------`)
nums.forEach((num, index, arr) => {
	console.log(num, "forEach method");
});

//lets do using custom forEach or pollyfill
Array.prototype.myForEach=function (callback) {
	for (let i=0;i<this.length;i++) {
		// will call the callback function on each element
		callback(this[i], i, this);
	}
}

nums.myForEach((num, index, arr) => {
	console.log(num, "forEach method");
});


//Pollyfill for Reduce

const arr=[1, 2, 3, 4, 5, 6, 7];
let sum=arr.reduce((accumulator, currentValue, currentIndex, a) => {
	console.log(`reduce accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, array: ${a}`);
	return accumulator+currentValue;
}, 0);

console.log(`total sum using native reduce method: ${sum}`)


//let create a pollyfill for reduce
Array.prototype.myReduce=function (callback, initialValue) {
	let accumulator=initialValue;
	//iterate the items on this (current array)
	for (let i=0;i<this.length;i++) {
		//if user not provided initialValue, use first item as accumulator 
		accumulator=accumulator? callback(accumulator, this[i], i, this):this[i];
	}
	return accumulator;
}

const sum2=arr.myReduce((accumulator, currentValue, currentIndex, a) => {
	console.log(`reduce accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, array: ${a}`);
	return accumulator+currentValue;
}, 0);

console.log(`total sum using custom reduce method: ${sum2}`)

// polyfill for call
console.log(`--------------Call--------------`)

const house_1={
	name: "John Doe",
	age: 30,
	city: "New York",
	address: "New B122 York, NY",
}
//display the user details
function displayUserDetails(price, currency) {
	console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Address: ${this.address} 
		has purchase the house with Price: ${price}${currency}`);
}

displayUserDetails.call(house_1, 12000000, "$"); // call method

// create a pollyfill for call
Function.prototype.myCall=function (context={}, ...args) {
	///first check the this is function or not 
	if (typeof this!=='function') {
		throw new TypeError(`${this} is not callable`);
	}
	// create a new function with context and arguments
	context.fun=this;
	// call the new function
	context.fun(...args);
}
displayUserDetails.myCall(house_1, 1200000, "$");

//pollyfill for apply
console.log(`--------------Apply--------------`)

displayUserDetails.apply(house_1, [12000000, "$"]);

// create a pollyfill for apply
Function.prototype.myApply=function (context={}, args) {
	///first check the this is function or not 
	if (typeof this!=='function') {
		throw new TypeError(`${this} is not callable`);
	}
	if (!Array.isArray(args)) {
		throw new TypeError("args must be an array");
	}
	// create a new function with context and arguments
	context.fun=this;
	// call the new function with arguments
	context.fun(...args);
}
displayUserDetails.myApply(house_1, [12000000, "$"]);

//Pollyfill for bind
console.log(`--------------Bind--------------`)

let boundDisplayUserDetails=displayUserDetails.bind(house_1, 12000000);
boundDisplayUserDetails("$");

// create a pollyfill for bind
Function.prototype.myBind=function (context, ...args) {
	// check if this is function or not
	if (typeof this!=='function') {
		throw new TypeError(`${this} can not be bind as it's not callable`);
	}

	context.fun=this;
	//bind accepting to return a function which can be called with provided arguments or can pass argums before or later.
	return (...innerArgs) => {
		return context.fun(...args, ...innerArgs);
	}
};
const boundDisplayUserDetails_myBind=displayUserDetails.myBind(house_1, 12000000);
boundDisplayUserDetails_myBind("$");



