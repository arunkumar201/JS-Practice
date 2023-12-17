const limit = 53;
function* OddSequenceGenerator() {
	let sum = 0;
	for (let i = 0; i <= limit; i++) {
		if (i % 2 !== 0) {
			sum += i;
			yield i;
			if (i === 53) {
				yield `${sum} and ith ${i}`;
			}
		}
	}
}
const gen = OddSequenceGenerator();
console.log([0, ...gen]);

for (let odd in gen) {
	console.log(odd);
}

//using array function
const upperLimit = 53;

const generateOddSequence = function* () {
	let sum = 0;

	for (let i = 0; i <= upperLimit; i++) {
		if (i % 2 !== 0) {
			sum += i;
			yield i;

			if (i === upperLimit) {
				yield `${sum} and ith ${i}`;
			}
		}
	}
};

const oddSequenceGenerator = generateOddSequence();

for (let odd of oddSequenceGenerator) {
	console.log(odd);
}


function* gen1() {
  yield 14;
  yield 62;
  yield 63;
}

const g = gen1();

console.log(g.next());        // { value: 14, done: false }
console.log(g.return('Hello World')); // { value: "Hello World", done: true }
console.log(g.next());        // { value: undefined, done: true }
