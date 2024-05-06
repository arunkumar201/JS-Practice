const [,,,,,,,c]=[1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(c); //7

const {7:d}=[1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(d)

function abc(name) {
	this.name=name;
	console.log("hii")
}

const value=new abc("Arun");
console.log(value);
