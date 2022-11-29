//1 copying an array 

let arr=[1,3,4,5,4,3,4];

//New Array 
let newArray=[...arr];
console.log(newArray);
//If we like below we will get Multidimensional Array
let newArray1=[arr];
console.log(newArray1);

//concatenate the arrays
let arr1=[32,3,3,2,3,2]
let concat=[...arr,...arr1];
console.log(concat);

//Pass arguments as arrays
const Display=(...arguments) => {
  
  for(let i of arguments){
  console.log(i+" ");
  }
  return arguments;
}
let x=[1,2,3,2,3,4];
Display(...x);

//Copy an object

let obj = {a: 1, b: 2, c: 3}
let copy = {...obj}
console.log(copy);
let copy1={obj};
console.log(copy1)

//merge the objects
let newobj={x:12,y:34}
let merge={...copy,...newobj};
console.log(merge);