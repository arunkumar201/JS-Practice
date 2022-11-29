let a="arun KUmar";
let toUpper=a.toUpperCase();
console.log(toUpper);

let even=(num)=>{
    if(num%2==0)
    {
        return "Yes";
    }
};

let str2=true;
console.log(String.prototype.toUpperCase.call(str2));
console.log(str2.toUpperCase());
let result=even(2).toUpperCase();
console.log(result);

let result1 = even(1).toUpperCase();
console.log(result1); 
//TypeError: Cannot read properties of undefined (reading 

let str=null;
console.log(str.toUpperCase()); 
//TypeError: Cannot read properties of undefined (reading 

