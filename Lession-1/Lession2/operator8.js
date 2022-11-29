function UnaryPlusOp()
{
let x=43;
x=+x;
console.log(x); //43

let y='34'; // or y=-34
y=+y;
console.log(y); //34  and Output fory=-34 is -34 

let z='34as';
z=+z;
console.log(z); //NaN

let a=25.55; // or a='25.55'
a=+a;
console.log(a) //25.55

var myBoolean = false;
myBoolean=+myBoolean;
console.log(myBoolean)  //0

var myBoolean = true;
myBoolean=+myBoolean;
console.log(myBoolean)  //1
}
function UnaryMinusOp()
{
    let x=43;
x=-x;
console.log(x); //-43

let y='34'; // 
y=-y;
console.log(y); //-34 

let z='34as';
z=-z;
console.log(z); //NaN

let a=25.55; // or a='25.55'
a=+a;
console.log(a) //25.55

var myBoolean = false;
myBoolean=-myBoolean;
console.log(myBoolean)  //-0

var myBoolean = true;
myBoolean=-myBoolean;
console.log(myBoolean)  //1
}

UnaryPlusOp();  //Unart + operation 
console.log("For Unary Minus OP");
UnaryMinusOp();  //Unart - operation 







