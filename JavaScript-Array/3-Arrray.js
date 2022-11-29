let arr=[12,2,3,2,3,34];
console.log(arr.at(-1))//last element
console.log(arr.at(arr.length-1) )//last element

let n1=arr.length;
console.log(arr.at(-(n1)))//first element

console.log(arr[5]); //last element
console.log(arr[0]); //first element

//by using forEach Loop
 arr.forEach((item,index,array)=>{
     console.log(item+" "+index);
 });
 arr1=['arun',23,34,4,5,'kumar'];
 arr1.forEach((a,i,array)=>{
     console.log(a,i); //
 })