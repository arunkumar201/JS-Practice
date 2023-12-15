function* numGenerators() {
	yield 1;
	yield "Hello World!";
	yield 3
}

const gen=numGenerators()

//iteratable 
for (let value of gen) {
	
	console.log(value)//1,Hello World!,3
}
//also 
let sequence = [0, ...numGenerators()];
console.log(sequence)//[ 0, 1, 'Hello World!', 3 ]


console.log(gen)//returns an generator object
console.log(gen.next(), "Next()")//returns an object {value,done} ,going to have first yield value 
console.log(gen.next().done, "done ")//it tells that we are done with all values,we were gets all values undefined afterwards 
console.log(gen.next().value, "`next() 1");//2nd yield value	
console.log(gen.next().value,"`next() 2")//3rd yield value	
  console.log(gen.next().value, "`next() 3");//4th yield value	,as we do not have that one so we will get undefined value



function* fetchPosts() {
	const url = "https://jsonplaceholder.typicode.com/posts";
	const response = yield fetch(url);
	const posts = yield response.json();
	// console.log(posts);
}

const postGen = fetchPosts();
const promise = postGen.next().value;

promise.then((response) => {
	postGen.next(response).value.then((data) => {
		postGen.next(data);
	});
});
function* gen1() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator = gen1();

let question = generator.next().value; // <-- yield returns the value

generator.next(422); // --> pass the result into the generator
