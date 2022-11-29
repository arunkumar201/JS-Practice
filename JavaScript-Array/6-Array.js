//pop() Method in JS 
//it remove or delete the last element and return it
//this method meade the changes In Original Array
let arr1=[12,3,444,'44','Arun'];
let le=arr1.pop();
console.log(le);
console.log(arr1);

//push()  adds a elemnt at the end of the array
//returns the array with  new length
arr1.push("kumar",'Prajapati');
console.log(arr1);

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

console.log(arr1.shift());
console.log(arr1);

//unshift() adds the new element at the starting  of the array
//it will iverwrte the original
console.log(arr1.unshift(12,344,333,233));
console.log(arr1)