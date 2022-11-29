let a=3;
let b =2;
console.log(a**b);//9
console.log(Math.pow(a,b));//9
//alsowe can use BigInt number as well 
let x=3n,y=4n;
console.log(x ** y);//81n
//console.log(Math.pow(x, y));//throws an error 
//say  Cannot convert a BigInt value to a number
let A=4;
A**=3;
console.log(A); // 64
