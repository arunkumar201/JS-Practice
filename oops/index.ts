/*

Encapsulation - OOPS with TS 
- it refers to the bundling of data(fields) and methods (functions) together into a single unit.
 and hiding the internal implementation details. 
 - TypeScript fully supports encapsulation through classes and access modifiers.
 - Encapsulation is a fundamental concept in object-oriented programming (OOP).
 - Encapsulation is the process of hiding the internal details of an object and exposing only the necessary information.
 - Access modifiers in TypeScript:
  - public: accessible from anywhere within the class, module, or file.
  - private: accessible only within the class itself.
  - protected: accessible within the class and its subclasses.
  - readonly: only accessible during initialization and cannot be changed later.
  - Access modifiers are optional. If not specified, the default is public.
*/

class BankAccount {
	private _balance: number = 0;
	private _accountNumber: string;
	public accountHolderName: string;

	constructor(holderName: string, initialBalance: number) {
		this.accountHolderName = holderName;
		this._balance = initialBalance;
		this._accountNumber = this.generateAccountNumber();
	}
	private generateAccountNumber(): string {
		return `ACC-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
	}
	public getBalance(): number {
		return this._balance;
	}

	private validateTrnxAmount(amount: number): boolean {
		if (amount <= 0) {
			console.error(
				"Invalid transaction amount. Amount must be greater than zero."
			);
			return false;
		}
		return this._balance >= amount;
	}
	public deposit(amount: number): boolean {
		if (this.validateTrnxAmount(amount)) {
			this._balance += amount;
			console.log(`Deposited ${amount} into account ${this._accountNumber}`);
			return true;
		}
		throw new Error("Insufficient funds in the account");
	}
	protected withdraw(amount: number): boolean {
		if (this.validateTrnxAmount(amount)) {
			this._balance -= amount;
			console.log(`Withdrew ${amount} from account ${this._accountNumber}`);
			return true;
		}
		throw new Error("Insufficient funds in the account");
	}
}

const myAccount = new BankAccount("John Doe", 1000);
console.log(myAccount.accountHolderName); // John Doe
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // Deposited 500 into account random_string
console.log(myAccount.getBalance()); // 1500

/*

--- Inheritance - OOPS with TS 
- it refers to the process of creating a new class that inherits the properties and methods of an existing class.
- TypeScript fully supports inheritance through classes.
- Inheritance is a fundamental concept in object-oriented programming (OOP).
- Inheritance allows us to reuse code by creating a new class that extends an existing class.
  - A class can inherit properties and methods from another class using the extends keyword.
  - The child class can access and modify the properties and methods of the parent class using the super keyword.
  - The child class can also override the methods of the parent class by providing its own implementation.
  */

class SavingAccount extends BankAccount {
	private _interestRate: number;

	constructor(
		holderName: string,
		initialBalance: number,
		interestRate: number
	) {
		super(holderName, initialBalance);
		this._interestRate = interestRate;
	}
	public calculateInterest(): number {
		return (this.getBalance() * this._interestRate) / 100;
	}
	public withdrawAmount(amount: number): boolean {
		return this.withdraw(amount);
	}
	public depositAmount(amount: number): boolean {
		return this.deposit(amount);
	}
}

console.log(`-------- Saving Account --------`);
const savingsAccount = new SavingAccount("Jane Doe", 1000, 5);
console.log(savingsAccount.calculateInterest()); // 50 per Annum
console.log(savingsAccount.getBalance(), "Saving Account Balance");
//now lets withdraw some amount
savingsAccount.withdrawAmount(20);
console.log(savingsAccount.getBalance(), "Saving Account Balance");

/*

--- Polymorphism - OOPS with TS 
- it refers to the ability of an object to take on multiple forms or appear different.
- TypeScript fully supports polymorphism through interfaces and method overriding and overloading.
- Polymorphism is a fundamental concept in object-oriented programming (OOP).

Method overloading, on the other hand, enables us to define multiple methods with the same name but different parameters.
 TypeScript determines the appropriate method to invoke based on the number or types of arguments passed.
*/

abstract class Shape {
	protected color: string;
	constructor(color: string) {
		this.color = color;
		console.log(`Shape created with color ${this.color}`);
	}

	public abstract calculateArea(): number;
}

class Rectangle extends Shape {
	private length: number;
	private width: number;
	constructor(color: string, length: number, width: number) {
		super(color);
		this.length = length;
		this.width = width;
		console.log(`Rectangle created with color ${this.color}`);
	}
	public calculateArea(): number {
		return this.length * this.width;
	}

	public add(a: any, b: any): any {
		return a + b;
	}
}

class Circle extends Shape {
	private radius: number;

	constructor(color: string, radius: number) {
		super(color);
		this.radius = radius;
		console.log(`Circle created with color ${this.color}`);
	}
	public calculateArea(): number {
		return Math.PI * this.radius * this.radius;
	}
}

const myCircle = new Circle("red", 12);
const myRectangle = new Rectangle("green", 1, 5);
console.log(myCircle.calculateArea());
console.log(myRectangle.calculateArea());

/*

--- Abstract Classes - OOPS with TS 
- it refers to the process of creating a class that cannot be instantiated.
- TypeScript fully supports abstract classes through classes.
- Abstract classes can contain methods, properties, and constructors.
- Abstract classes are useful when we want to create a base class with some common behavior 
but still want to provide specific implementations for some of its methods.
- Abstract classes are declared with the abstract keyword.
*/

abstract class Animal {
	public abstract makeSound(): void;
	public abstract eat(): void;
	public abstract sleep(): void;
	public abstract getDescription(): string;
	public abstract getAge(): number;
}

class Cat extends Animal {
	private name: string;
	private age: number;
	constructor(name: string, age: number) {
		super();
		this.name = name;
		this.age = age;
		console.log(`Cat created with name ${this.name} and age ${this.age}`);
	}
	public makeSound(): void {
		console.log("Meow");
	}
	public eat(): void {
		console.log("Eats cat food");
	}
	public sleep(): void {
		console.log("Sleeep");
	}
	public getDescription(): string {
		return `Cat named ${this.name} is ${this.age} years old`;
	}
	public getAge(): number {
		return this.age;
	}
}


const myCat = new Cat("Whiskers",5);
myCat.makeSound();
myCat.eat();
myCat.sleep();
console.log(myCat.getDescription());
console.log(myCat.getAge());
