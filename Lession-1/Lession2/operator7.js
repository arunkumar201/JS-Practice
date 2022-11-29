// let rem=253%24;
// console.log(rem);

console.log(7%3); //aslo 7 mod 3=1

console.log(7%-3);//aslo 7 mod -3=1

console.log(-7%3);//-1
//but 7 mode 3 =2
//As Modulus result always be zero or posive 
// let divisor=3;
// let dividend=-7;
// const mod=((dividend%divisor+divisor)%divisor);  //2
// console.log(mod);  //2 
//but thier remainder would be -1
//like a clock
//values always divident-1
//2344 mod 34= <=33 always
const mod = (dividend, divisor) =>( ((dividend % divisor)+ divisor) % divisor);

console.log('remainder:'+mod(-7,3)); // 
console.log('remainder:'+mod(-7,2)); // 
console.log('remainder:'+mod(-7,5)); // 


