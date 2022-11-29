// function sum(a) { 

//     var b=12;
//     console.log(a+b);
//    return function(c){
//         return a+b+c;
//         }
// }
// sum(5);
// var res=sum(2);
// console.log(res(5));
// console.log(res)


// function DisplayName(str){
//     var s1="Hello";
//   console.log(a);
//     function greet(s2){
//        let a=244;
//        console.log(a);
//         console.log(s1," ",s2);
//     }
//     console.log(a);
//     greet('World') 
// }
// var a=34;
// let res=DisplayName('world')

function DisplayMsg(){
    var s1="Hello World";
    console.log(s1);
    return ()=>{
        console.log(s1);
        return "Hi I am arun"
    }
}
let res=DisplayMsg();
let s=res()
console.log(s);

console.log(res());


