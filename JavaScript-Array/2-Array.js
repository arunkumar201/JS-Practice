let arr = new Array(5);
arr[0] = "Arun";
arr[1] = "BE CSE";
arr[2] = "6th Sem";
arr[3] = "9.08 CPI";
arr[4] = "626349";
console.log(arr);

let arr1 = new Array();
arr1[0] = "Arun";
arr1[1] = 18;
arr1[2] = true;
arr1[3] = null;
arr1[4] = undefined;
arr1[5] = NaN;

console.log(arr1)

for(let i=0;i<arr.length; i++){

    console.log(arr[i],"\n");
}
for(let  i=0;i<arr1.length;i++){

    console.log(arr1[i]);
}

for(let a of arr){
    console.log(a)
}

for (let a of arr1) {
  console.log(a);
}
let a=[1,2,3,4,5,4];
for(let arr of a){
    console.log(arr)
}

console.log(typeof a);
console.log(typeof arr1);
console.log(typeof arr);