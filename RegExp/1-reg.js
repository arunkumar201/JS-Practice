let MyRegExp = /helloWorld/;

console.log(MyRegExp);
console.log(MyRegExp.source);
console.log(MyRegExp.test("helloWorld"));
console.log(MyRegExp.test("helloworld"));
//2nd way to create a regex expression by using RegExp constructor function

let MyRegExp1 = new RegExp("I am Arun Kumar");
console.log(MyRegExp1);
console.log(MyRegExp1.source);
console.log(MyRegExp1.test("I am Arun Kumar"));
console.log(MyRegExp1.test("I"));

console.log(MyRegExp1.test("I am Arun Kumar"));
console.log(MyRegExp1.source);
console.log(MyRegExp1);


// let rege=/i am arun kumar arun kumar arun/;
// let str="arun";
// console.log(rege.exec(str));
// let res=rege.exec("i");
// console.log(res);


let prefix1 = "arun";
let suffix1 = "kumar";

let objGreeting1 = new RegExp("[" + prefix1 + "] hello " +suffix1);
console.log(objGreeting1);  
console.log(/abc/.test("abc454de"));
// true
console.log(/abc/.test("abCxde"));
//  false

