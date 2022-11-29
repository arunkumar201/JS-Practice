let str;
str = "arun kumar Lahar lahar Mp";
let res1=str.replace("Lahar","Ahmedabad");
console.log(res1);

let res2 = str.replace(/Lahar/g, "Ahmedabad");
console.log(res2);

let res3 = str.replace(/Lahar/gi, "Ahmedabad");  //all Occurrences+case insenstive
console.log(res3);
