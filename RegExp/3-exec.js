let Reg = /Arun/gi;
let str = "I am Arun Kumar Arun Arun Arun ArUN ";
console.log(Reg.exec(str));
console.log(Reg.exec(str));
console.log(Reg.exec(str));

// console.log(Reg.exec(str).input);
console.log(Reg.exec(str).input);
console.log(Reg.exec(str).groups);
console.log(Reg.exec(str).index); 


console.log(Reg.exec(str));
console.log(Reg.exec(str));

do {
  console.log(Reg.exec(str));
} while (Reg.exec(str) != null);
//match() returns an Array of matches elements
console.log(str.match(Reg));
console.log(str.match(Reg));

//replace() method to replace the first occurrence of the string 
let str1="Arun Arun";
let res1=str1.replace('Arun','Arun kumar',"g");
console.log(res1);
console.log(res1);
//replaces all occurence  of a substring to new string
console.log(str1.replace(/Arun/g,"Arun Kumar"));

let st1="I am arun arun arun aru ";
let re=/arun/;
console.log(st1.match(re));
console.log(st1.match("arun"));
console.log(st1.search("arun"));
let re1=/AruN/i;
console.log(st1.search(re1));


const result2 = 'Hel?lo ?world?!'.split("?");
console.log(result2); 