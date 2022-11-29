
const GetSum_3=(...arguments)=>
{
 let sum =a+b+c;
 sum=sum+arguments[0]+arguments[1]+arguments[2];
 return sum;
}
let a=12,b=12,c=26;
console.log("Sum of Three Numbers",GetSum_3(a,b,c));

const getSum_4=(...arguments)=>{
    let sum=x+y+w+z;
   let total=0
   for (const x of arguments) {
       total += x;
   }
   console.log(total)
   return sum;
}

let x=10,y=20,z=30,w=40;
console.log("Sum of All Four Number",getSum_4(x,y,z,w));

const Square=(...all) => {
  
  return all.map(e=>e*e);
}
 const SortItem=(...arr)=>{
 
//  return a.sort((a,b)=>a+b);
 return arr.sort(function (a, b) {
   return a + b;
 });
 }

console.log(Square(2, 3, 4, 5, 6, 7, 8, 9));
console.log(SortItem(2, 3, 4, 5, 6, 7, 8, 9));

let Stuname=['arun','Kumar','anuj','ramu','Aakash','Babu'];

const [n1,n2,n3,...names] = Stuname;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(names);
