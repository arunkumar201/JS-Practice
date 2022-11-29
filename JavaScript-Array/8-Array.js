let arr1 = [1, 2, 33, 332, 3];
let join = arr1.join(" || ");
console.log(join);
//join() method retunr a new array as String 
//it means it coverts the Array into string and put the some 
//separator by default is comma(,);

//reverse() method will revers the order of the array
//elements and it overwrite the original array
let rev= arr1.reverse();
console.log(rev);

console.log(arr1.toString());


//valueof()
// The valueOf() method returns the array itself.

// The valueOf() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log(myArray);