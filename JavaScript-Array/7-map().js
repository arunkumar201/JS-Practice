let circles = [1, 2, 3];

let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i]);
  areas.push(area);
}
console.log(areas);

let ar = circles.map(function area(x) {
  return Math.floor(Math.PI * x * x);
});
console.log(ar);

let arr1 = [1, 2, 3, 4, 5];
let double = arr1.map(MyDouble);
console.log("Double Values",double);
let tripple = arr1.map(MyTripple);
console.log("tripple Values", tripple);

let binary = arr1.map(MyBinary);
console.log("Binary Values", binary);


function MyDouble(value) {
  return value * 2;
}

function MyTripple(value) {
  return value * 3;
}
function MyBinary(value) {
  return value.toString(2);
}
//also we can do it in one line 
let arr2 = [1, 2, 3, 4, 5];

// let tripple1 = arr2.map(function(x){
//           return x*3;
// }
// );

// let tripple1 = arr2.map(function MyTripple(x) {
//   return x * 3;
// });

let tripple1 = arr2.map((x)=> x*3);
console.log(tripple1);
