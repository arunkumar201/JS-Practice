//splice() mrthod in Js Array
let arr1=[1,2,3,4,4,5];

let rem=arr1.splice(0,2,5,6);
console.log(rem);
console.log(arr1);

let arr2=[1,23,2,3,4];

let additem=arr2.splice(3,0,33);  //adding 33 at position/index 3 before 3 value
console.log(additem);
console.log(arr2);

