let reg=/I aM ARun/;
console.log(reg.test("I am Arun"));
let reg1 = /I aM ARun/i;  //i means ignore 
//it is flag it will change the behavior of searching 
//bassicallu, i flag will ignore thr cases 
//i will cosider /hi/ and /HI/ as same 
console.log(reg1.test("I am Arun"));

let reg2=new RegExp("I Am ARNn");
console.log(reg2.test("I am Arun"));
let reg3 = new RegExp("I Am ARun","i");
console.log(reg3.test("I am Arun"));

