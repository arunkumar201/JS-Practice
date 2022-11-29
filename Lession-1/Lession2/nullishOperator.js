// let student_score =0;

// console.log(student_score || "no score" );  //no score 
// //this is a problem becouse 0 is a Falsy value
// //to overcome this problem we have a New operator 
// //nullish Coalescing ?? operator that
// //has only two values. it return second value inly
// // if first value is null or undefined  else first value
// console.log(student_score ?? "no score" );  //0


// let a=null;
// let b=0;
// console.log(a|| b);
// //?? returns the 2nd value if 1st value is null or undefined
// console.log(a ?? b); //return the value of the b.


// let result = null ?? 1/0;
// console.log(result);  //Infinity

// let s='Hi I am Arun Kumar';
// let result= 1 ?? s;
// console.log(result);  //1

// let result= 1 ?? '';
// console.log(result);  //1

let result= null ?? 'i am Arun KUmar K ';
console.log(result);  //1


