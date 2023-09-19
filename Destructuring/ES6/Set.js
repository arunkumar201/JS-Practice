let s1=new Set();
console.log(typeof s1);
s1.add(123);
s1.add(13);
s1.add(12);
s1.add(3);
s1.add(23);
console.log(s1)

for(let i of s1)
   console.log(i);
console.log(...s1);

s1.forEach((i)=>{
console.log(i)})

let s2=new Set([1,2,3,4,5,5,64,3,4,5,5,5,6,6,5]);
console.log(s2);
console.log(s2.size)
s2.add(122)
.add(199)
.add(111)
console.log(s2);

for(let [v,k] of s2.entries()){
console.log(`Key is: ${k} an value:`);
}

for(let v of s2.values())
   console.log(v);
   
for(let k of s2.keys())
   console.log(k)

s2.forEach((i)=>{console.log(i)})

console.log(...s2);
s2.delete(122)
console.log(s2.has(122));
s2.delete(199)
console.log(s2.has(112));
console.log(s2)


/*
**********************Weak Set ******************************************
Weak Set is similar to weak map and set
we can't iterate the weak set
it is contains only object 
it supports has(value),add(value) and delete(value) methods
*/
let ws=new WeakSet();
let obj={name:'Arun'};
console.log(ws);
ws.add(obj);
console.log(ws);
console.log(ws.has(obj));
ws.delete(obj);
console.log(ws.has(obj))
