// let user={
//  Fname:'Arun',
//  Lname:'Kumar',
//  Age: 25,
//  email: 'arun@gmail.com',
//  address:'b3 near road Delhi ',
//  getPhoneNumber(){
//     return 828383;
//  },
//  Profession:'Software Engineer'
// };

// let{Fname,Lname,email,Age,phone,address,getPhoneNumber}=user;

// console.log(Fname,Lname,email,Age);
// console.log(address,getPhoneNumber());

// let Stu={
//   first_name:'Arun',
//   last_name:'Kumar',
//   stu_age:23,
// }

// let {first_name:fn,last_name:ln}=Stu;
// console.log(fn);
// console.log(ln)

// function getDetails(){
//         return {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven'}
// }
// let {1:first,2:second,3:third,4:fourth=784,5:five}=getDetails() ;
// console.log(first,second,third,fourth);

// function getPerson(){
// return null;
// }

// let {fn:fname="Arun",ln:lname="kumar"}=getPerson() ||{};
// console.log(fname,lname);

// function emp() {
//   return {
//     emp_id: 2454,
//     personal_details: {
//       age: 23,
//       Pan: 4567,
//       Fname: "Arun",
//       Lname: "Kumar",
//       Salary: "$44k",
//     },
//     address: "b5 New york park",
//   };
// }

// let {
//   emp_id: id,
//   personal_details: { age, Pan, Fname, Lname, Salary },
//   address,
// } = emp();
// console.log(id)
// console.log(Salary);
// console.log(Pan);
// console.log(Fname);
// console.log(Lname);
// console.log(age); //

let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`);
// }
// console.log(user)

for(let [key,value] of Object.entries(user)){
 console.log(`${key}:${value}`);
}