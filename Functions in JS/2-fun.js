function MyName(MyName1){

  console.log("My Name is "+MyName1());
    
    return "Arun Kumar";

}
function MyName1(){
    return "Arun kumar"
   console.log("My Name is "+MyName1());

}
 console.log("My Name is "+MyName(MyName1));

//default parameters in function
function Add(a=12,b=0){
    return a+b
}
console.log(Add(12,3));
console.log(Add());

// function printValue(a=1, b) {
//     console.log("a = " + a + " and b = " + b);
// }

// console.log(printValue());    // Logs: a = 1 and b = undefined
// console.log(printValue(7));    // Logs: a = 7 and b = undefined
// console.log(printValue(7, 3));    // Logs: a = 7 and b = 3


function div(a,b) {
    b=(b!==0 && typeof b!=='undefined')?b:2;
    return a/b;
    
}
console.log(div(20));