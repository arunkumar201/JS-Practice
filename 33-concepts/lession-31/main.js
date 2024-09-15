/***
 * Design Patterns in js 
 */
// Factory Pattern
// Centralizes the creation of objects, allowing for the instantiation of different objects based 
//on certain conditions without specifying the exact class of the object that will be created.

class Car {
	constructor (model) {
		this.model=model;
	}
}

class CarFactory {
	static createCar(model) {
		return new Car(model);
	}
}

// Usage
const myCar=CarFactory.createCar('Toyota');
console.log(myCar.model); // Toyota
