const getName = () => {
	//outer scope
	let name = "ARUN KUMAR ";
	console.log(name);
	return () => {
		//inner scope
		let name = "vikash";
		return `Current Name is ${name}`;
	};
};
const name = getName();
console.log(typeof name);
console.log(name());
