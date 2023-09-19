//Before ES5 and ES6
//Empty Object Creation 

let Student={};
Student.name="Arun";
Student.Age=22;
Student['Phone']=3456543

console.log(Student);

//With Values

let stu={name:'Arun',Age:22,Phone:3456543};
console.log(stu);

//In ES5  the object literal is a collection of name-value pairs. For example,

let myInfo=(name,age,phone) => {
return {
name:name,
age:age,
phone:phone
}
}
console.log(myInfo('arun',22,2345678765432));

//In ES6 the object literal is a collection of name-value pairs without Duplication

let Info = (name, age, phone) => {
  return {
    name,
    age,
    phone
  };
};
console.log(Info('arun',22,2345678765432));

//in ES5 
let deptName="deptName"
let id='emp_id';
let emp={
name:'Arun',
Age: 19,
 Phone: 3456543,
 [id]:855
}
//In ES5
emp[deptName] ='Back - end';
console.log(emp);