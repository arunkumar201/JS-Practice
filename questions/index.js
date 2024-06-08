const name = "window- arun";
const obj1 = {
	name: "arun",
	sayName: function () {
		console.log(`my name is in satName :- ${this.name}`);
		return this.name;
	},
	sayNameArrowFun: () => {
		console.log(`my name is in sayNameArrowFun:- ${this.name}`);
		return this.name;
	},
};
console.log(obj1.sayName());
console.log(obj1.sayNameArrowFun());
console.log(obj1.name); // window
console.log("-------inside the setTimeout-------");
setTimeout(obj1.sayName, 1000);
setTimeout(obj1.sayNameArrowFun, 2000);

//check two strings are Anagram or not
// silent and anagram
// a string is anagram of another if the letters of one string can be rearranged to form the other string.
// 1.using sorting
function anagramUsingSorting(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const s1 = [...str1].sort();
	const s2 = [...str2].sort();
	for (let i = 0; i < str1.length; i++) {
		if (s1[i] !== s2[i]) {
			return false;
		}
	}
	return true;
}
// using character count
function anagramUsingCharacterCount(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const char2 = new Array(26).fill(0);
	const char1 = new Array(26).fill(0);

	for (let i = 0; i < str1.length; i++) {
		char1[str1.charCodeAt(i) - 97]++;
		char2[str2.charCodeAt(i) - 97]++;
	}
	for (let i = 0; i < 26; i++) {
		if (char1[i] !== char2[i]) {
			return false;
		}
	}

	return true;
}

const str1 = "name";
const str2 = "mena";
console.log("--using sorting-------");
console.log(
	`is ${str1} anagram of ${str2} :- ${anagramUsingSorting(str1, str2)}`
);
console.log("--using character count-------");
console.log(
	`is ${str1} anagram of ${str2} :- ${anagramUsingCharacterCount(str1, str2)}`
);

// Detect cycle in a linked list

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;

// display(head) - displays the linked list items;
function display(head) {
	let temp = head;
	let result = "";
	while (temp) {
		result += temp.data + " -> ";
		temp = temp.next;
	}
	// Remove the trailing " -> "
	result = result.slice(0, -4);
	console.log(result);
}

// Detect cycle in a linked list using set
function detectCycleUsingSet(head) {
	let set = new Set();
	let temp = head;

	while (temp) {
		if (set.has(temp)) {
			return true;
		}
		set.add(temp);
		temp = temp.next;
	}
	return false;
}
console.log(`is cycle present :- ${detectCycleUsingSet(head)}`);
// using slow and fast pointer
function detectCycleUsingSlowFastPointer(head) {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}
	return false;
}
console.log(
	`is cycle present using floyd cycle detection  :- ${detectCycleUsingSlowFastPointer(
		head
	)}`
);

var msg = "hello world from window";
const obj2 = {
	msg: "hello world",
};

function logMessage() {
	console.log("logMessage function:-", this.msg); //logs "hello world"
}

logMessage.call(obj2); //logs "hello world"
logMessage.apply(obj2); //logs "hello world"
logMessage(); //logs "hello world from window"

// sum(2)(3);
function sum_simple(a) {
	return function (b) {
		return a + b;
	};
}
console.log(sum_simple(2)(3));

function sum(a) {
	return function (b) {
		return b ? sum(a + b) : a;
	};
}
console.log(sum(2)(3)(4)(3)());

// debounce function
function debounce(func, wait) {
	let timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func();
		}, wait);
	};
}

function sayName(name) {
	console.log(`debounced name ${name}`);
	return name;
}

const sayNameDebounced = debounce(() => sayName("Arun"), 3000);
sayNameDebounced();

// Maximum subarray sum in an array
// eg. [-2,1,-3,4,-1,2,1,-5,4] ans = 6

// using brute force
const MaximumSumSubArrayUsingBruteForce = (arr) => {
	let ans = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		let currSum = 0;
		for (let j = i; j < arr.length; j++) {
			currSum += arr[j];
			ans = Math.max(ans, currSum);
		}
	}
	return ans;
};
console.log(
	`Maximum Sum SubArray:- ${MaximumSumSubArrayUsingBruteForce([
		-2, 1, -3, 4, -1, 2, 1, -5, 4,
	])}`
);

// using prefix sum
const MaximumSumSubArrayUsingPrefixSum = (arr) => {
	let ans = -Infinity;
	let prefixSum = 0;
	for (let i = 0; i < arr.length; i++) {
		prefixSum += arr[i];
		ans = Math.max(ans, prefixSum);
		if (prefixSum < 0) {
			prefixSum = 0;
		}
	}
	return ans;
};

function x() {
	for (var i = 1; i <= 3; i++) {
		console.log(`inside the loop i:- ${i}`);
		setTimeout(() => {
			console.log(`inside the setTimeout i:- ${i}`);
			console.log(i); //4 4 4
		}, 3000);

		function fun(i) {
			setTimeout(() => {
				console.log(`inside the fun i:- ${i}`);
				console.log(i); //1 2 3
			}, 3000);
		}
		fun(i);
	}
}
x();

function xLet() {
	for (let i = 1; i <= 3; i++) {
		console.log(`inside the loop i:- ${i}`);
		setTimeout(() => {
			console.log(`inside the setTimeout i:- ${i}`);
			console.log(i);
		}, 3000);
	}
}
// xLet();
