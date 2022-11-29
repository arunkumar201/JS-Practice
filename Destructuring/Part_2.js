/*
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest);
*/

[a=10,b=20,c=30,d=40,e=50]=[12,21];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x=12;
let y=20;
console.log("Values Before swapping:X="+x+" Y="+y);
[x, y] = [y, x];
console.log("Values after swapping:X=" + x + " Y=" + y);

function getItems(){
return null;
}
// var [A = 12, B = 12] = getItems(); //Error typeError 
//Uncaught TypeError: getItems is not a function or its return value is not iterable
var [A = 12, B = 12] = getItems()|| [];
console.log(A);
console.log(B);

