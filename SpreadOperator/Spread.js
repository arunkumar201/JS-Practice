
const getMax=(...arr) => {
    return Math.min(...arr)
}
console.log(getMax(12,2,12,2,1,2,2,11,-1,222,-554,4433));
//Clone of an object
const Stu={
name:"Arun Kumar",
Age:22,
phoneNumber:98933,
emailAddress:"xyz@google.com"
};
const cloneStu={
   ...Stu,
}
console.log(Stu===cloneStu)//they are stored at different Locations 
//or  having different references
//Now we will Check whether they contains same contents or not
console.log(JSON.stringify(Stu)===JSON.stringify(cloneStu));

console.log(cloneStu);
console.log(JSON.stringify(cloneStu));

//Another and best way to copying an array or object 
let StuAges=[12,23,22,15,17,25,19,18];

let StuInfo={
Fname : 'Anamika',
lname : 'Rai',
age : 20,
id : 20,
}
//Lets  Create a Copying of StuInfo and StuAges
let copyStuInfo =Object.assign({},StuInfo);
let copyStuAges =Object.assign([],StuAges)
console.log(copyStuAges)
console.log(copyStuInfo)



function Sum(...arr)//rest operator 
{
   let sum=0;
   arr.forEach((i)=>sum+=i)
   return sum;
}
 
 function Sum2(...arr) {
   //rest operator
   let sum = 0;
   arr.forEach((i) => (sum += i));
   return sum;
 }
 
 let a=[12,2,3,3,3,22,33,3,3,4,4,3,4,4,33,4,5,4,4,4,4,5]
let res=Sum(12,2,3,3,3,22,33,3,3,4,4,3,4,4,33,4,5,4,4,4,4,5);
let res2=Sum2(...a); //Spread Operator or parameter 
console.log(res);
console.log(res2);

const str="Arun Kumar";
console.log(...str);


function getMultiplication(a,b,c=1,...arr)
{
    let sum=1;
    for(let i of arr){
      sum*=i;
    }
    sum*=a*b*c;
    return sum;
}
console.log(getMultiplication(1,2,3,5));

const animals=['8989', '898'];
const someOtherAnimals=[...animals];
console.log(JSON.stringify(someOtherAnimals));