//String Literal Declaration
//1. Using Single Quote  and Doubles Quotes
// const s1='Arun Kumar';
// const s2="Arun Kumar";
// console.log("String s1 is " + s1);
// console.log("String s2 is " + s2);

// console.log(s1 instanceof Object)
// console.log(s1===s2);
// By using String object (using the new keyword)
//We will Using new keyword for creating the string object
// let str = new String("Hi I Am Arun Kumar");
// console.log(str instanceof Object);
// console.log(str.constructor);


//Properties of  a String Object

//constructor property-It Return the constructor function for s string object
// console.log(s1.constructor);

//Length of a String Object
// console.log(s1.length);
// console.log(s2.length);
// console.log(str.length);

//3. prototype property:=it is GLobal Property of a String Object 
//it allows you to add properties and Methods to a String Object
// function student(name, qualification) {
//   this.name = name;
//   this.qualification = qualification;
// }
// student.prototype.age = 20;
// var stu = new student("Daniel Grint", "BCA");
// console.log(stu.name);
// console.log(stu.qualification);
// console.log(stu.age); 

//ES6 methods 

//1.startsWith(SearchValue,startPosition)
let S1="Arun Kumar I am Arun Kumar";
console.log(S1.includes("I"));
console.log(S1.includes("Kumar"));

console.log(S1.startsWith("Ar"))  //true
console.log(S1.startsWith("ar"))  //false

console.log(S1.startsWith("A", 16)); //true
console.log(S1.startsWith("A", 15)); //false

//2.endsWith(SearchValue,endPosition) 
console.log(S1.endsWith("ar")) //true;
console.log(S1.endsWith("Kumar")); //true;

console.log(S1.repeat(10))
