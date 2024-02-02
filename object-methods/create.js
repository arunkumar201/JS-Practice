//Object.create()
const User = {
	name: "Arun",
	getFullName: function () {
		return `${this.name} Kumar`;
	},
	myIntroduction: function () {
		return `Hello, I am ${this.getFullName()}`;
	},
};

console.log(User);
console.log(User.myIntroduction());
const user1=Object.create(User);
user1.name="Arun";
user1.age=28;
console.log(user1);


var dog = {
    eat: function() {
        console.log(this.eatFood)
    }
};

var maddie = Object.create(dog);
console.log(dog.isPrototypeOf(maddie)); //true
maddie.eatFood = 'NomNomNom'; 
maddie.eat(); //NomNomNom


const stu={
	name: "Suraj",
	age: 22,
	address: "Delhi",

	getName: function () {
		return this.name;
	},
	getAge: function () {
		return this.age;
	},
	getAddress: function () {
		return this.address;
	},
	
	
};

console.log(stu);

const newStudent=Object.create(stu);
console.log(newStudent.name,newStudent.age,newStudent.address);

stu.displayInfo = function () {
	return `Name: ${this.getName()}, Age: ${this.getAge()}, Address: ${this.getAddress()}`;
};
console.log(newStudent.displayInfo());


const person = {
  name: "John Doe",
	age: 30,
  location:"REMOTE"
};

const details = {
	occupation: "Developer",
	x: {
		y: "hello",
		z: {
			x: {
				v: {
					name:"We",
				}
			}
		}
	}
};

const johnWithDetails=Object.assign({}, details, person);
johnWithDetails.DOB="22/01/2000"
johnWithDetails.age=22222
console.log(johnWithDetails);
console.log(person)
