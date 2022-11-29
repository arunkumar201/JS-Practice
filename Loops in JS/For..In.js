//for in loop with objects
let stu = {
  Fname: "Arun",
  Lname: "Kumar",
  Age: 19,
  phone: "6263495645",
};

for (let key in stu) {
  // console.log(key); //name of the properties
  // console.log(stu[key]); //value
  console.log(`${key} => ${stu[key]}`); //value
}
//let me update the value
stu.Fname = "ak";
console.log(stu);
//for in loop with String

let str = "Arun Kumar I am Arun";
for (let key in str) {
  console.log(str[key]);
}
