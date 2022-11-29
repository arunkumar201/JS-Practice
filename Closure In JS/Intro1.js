var a=34;
function fun(){
    let a=23;
function Fun1() {
    let b=23;
    console.log(a+b);
}
// Fun1();
console.log(a);
}
console.log(a);
let res=fun();

function outerFunc() {
  let outerVar = "I am outside!";
  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }
  return innerFunc;
}
function exec() {
  const myInnerFunc = outerFunc();
  myInnerFunc();
}
exec();
