var a = 222; // Added a semicolon here

(() => {
	console.log("variable before variable ", a);//222
	a = 12;
	console.log("variable inside the IIFE fun ", a);//12
})();

console.log("variable after the IIFE fun ", a);//12
var a=100; 
console.log(a)//100
