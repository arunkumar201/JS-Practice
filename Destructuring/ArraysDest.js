//Array Destructuring
let a=[1,2,3,4,5,6];

const [n,b,c,d,e,f]=a;
console.log(b+c+d+e+f+n);
const[Fname,age]=['Arun',22];
console.log(Fname+" "+age);



function getScore(){
  return [100,121,143,167];
}
const[_1st,_2nd,_3rd,_4th]=getScore();
console.log(_1st+" "+_2nd+" "+_3rd+" "+_4th);


const stu=['Arun',"Kumar",20];

const[fname,Lname,Age]=stu;
console.log(fname);
console.log(Lname);
console.log(Age);


let score=[12,12,,...stu];
const [x,y,z,...arr]=score
console.log(x);
console.log(y);
console.log(z);
console.log(...arr);


const [skills,experience]="JAVASCRIPT 2years".split(' ');

console.log(skills);
console.log(experience);


const[m,v,,p]=[1,2,3,4];
console.log(m);
console.log(v);
console.log(p);


