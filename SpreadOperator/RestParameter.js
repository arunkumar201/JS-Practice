const GetSumOfAll=(a,b,c,d,e,f,g,h)=> {
  
  return a+b+c+d+e+f+g+h;
}
const GetSumOfAllUsingRest = (...a) => {
   let sum=0;
   for(i of a){
   sum+=i;
   }
   return sum;
};

let res1=GetSumOfAll(0,2,3,4,5,6,7,8)
console.log(res1)


let res2= GetSumOfAllUsingRest(10, 2, 3, 4, 5, 6, 7, 8);
console.log(res2);