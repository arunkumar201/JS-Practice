let str1 ="Arun Kumar";
//1
for(var i=0; i<str1.length; i++){
    console.log(str1[i]);
}
//2
for(let i of str1){
  console.log(i);
}

//js Strings are Immutable 
//,it means we can't change its value, once declared
let str2="Arun";
str2[0]="a";
console.log(str2);
str2="arun";
console.log(str2);

//multi-line Strings
//using + operator
let msg1="Arun"+
 "kumar"+
 "praja";
 console.log(msg1);

 let msg2 = "Arun \
      kumar \
     praja";
 console.log(msg2);

 

