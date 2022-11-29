// Array object Methods in JS
//1.Concat() method
/*
used to concatanates or joins two or more arrays
and it will returns a new Joine Array.
it does not change the values in existing Arrays
Syntax:
     arr1.concat(arr2,arr3,....,arrn);
     */
let arr1= [1,2,3,'arun',-23];
let arr2= [1,2,'kumar','arun'];
let arr3= [1,'u','a','arun',null,NaN,undefined];

let New_Joined_Array=arr1.concat(arr2,arr3);
console.log(New_Joined_Array);

//indexOf() method will take an  elment or value 
//it will searches in an array and returns it position or index
//if value is not present then it will return -1
//syntax  : Array_name.indexOf(item,index_start)
console.log(arr1.indexOf(1));
console.log(arr1.indexOf('arun'));
console.log(arr1.indexOf("arun"));
console.log(arr1.indexOf(3,1));
console.log(arr1.indexOf(-23));
