// console.log(true & true); //1

// console.log(23 || false);  //23
// console.log(true || false);//true
// console.log(false || '565');//565
// console.log(true || 58454); //true

// console.log(23 || false  || 323 || false);//23

// console.log (false |  "23")  //1223
// console.log (false |  "2j99h")  //0

// let a = 44;
// let b = 4854;

// let x=a ||= b;
// console.log(x);  //434

// let s1 = "arun";
// let s2; //undefined
// let x = (s1 ||= s2);
// console.log(x);

// let s1 = "arun";
// let s2; //undefined
// let x = (s1 &&= s2);
// console.log(x);//undefined
//x&&=y is equivalent to the x &&(x==y)
//x||=y is equivalent to the x ||(x==y)

// let s2 = "arun";
// //let s3=null;//arun
// // let s3=undefined;  //arun
// let s3 =NaN;  //it will display NaN As Blow Result
// console.log(s3 ??=s2);

// let city1='GandhiNagar';
// let city2 = "AHM";
// let x=city1 ??=city2;
// let y=city2 ??=city1;
// console.log(x);  //GandhiNagar
// console.log(y);//AHM

// let city1=null;  //or undefined
// let city2 = "AHM";
// let x=city1 ??=city2;
// let y=city2 ??=city1;
// console.log(x);  //AHM
// console.log(y);//AHM

let city1 = "GandhiNagar";
let city2 = null; //undefined
let x = (city1 ??= city2);
let y = (city2 ??= city1);
console.log(x); //GandhiNagar
console.log(y); //GandhiNagar

//??= is used to add the property to an object.
//or It will replace the null or undefined value to givent n
//another vallue or current value of the anither variable.

//??= is called as nullish coalescing assignment operator

let user = {
  username: "Arun",
};
user.nickname ??= "Kumar";

console.log(user); //new nickname propert will be added in user object.
