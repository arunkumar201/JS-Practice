// //comparing the Numbers
// let a=34;
// let b=33;
// console.log(a==b);//F
// console.log(a<b);//False
// console.log(a>b);//True
// console.log(a<=b);//False
// console.log(a>=b);//True


// // //comparing the Strings
// let a='Arun';
// let b='Arun';
// console.log(a==b);//True
// b='arun';
// console.log(a==b);//False
// console.log(a>b);//False
// console.log(a<b);

// let a='Abc';//A=65 
// let b='abc';//a=97

// console.log(a>b);//False
// b='Abc';
// console.log(a>b);

// let str1="ABCDabc";
// let str2="ABCaAbc"
// console.log(str1>str2);   //false
// console.log(str2>str1);//true

// let s1="ABC";
// let s2="abc";
// console.log(s1>s2);
// console.log(s1<s2);

// let s1="ABC";
// let s2="ABCa";
// console.log(s1>s2);
// console.log(s1<s2);
// console.log(s1==s2);


// let a="Arun Kumar";
// let b="ARUN kuMAr";
// console.log(a>b);//true
// console.log(a.toUpperCase()==b.toUpperCase());

// let a='43';
// let b='43';
// console.log(a==b);

let obj1={
    valueOf: function()
    {
        return 23;
    
    },
    toString:function()
    {
        return '12';
    },

    
};

let obj2={
    valueOf: function()
    {
        return '23';
    
    },
    toString:function()
    {
        return 23;
    },
};

// console.log(+obj1>=+obj2)//true 
// console.log(+obj1<+obj2)//false
// console.log(+obj1>+obj2)//false 
// console.log(+obj1==+obj2)//true 
// console.log(+obj1<=+obj2)//true 

console.log(obj1 ==23);
console.log(obj2 =='23')//true 
// 
console.log(obj1);//return object 
console.log(+obj1);//return  value of valueOf Method 

console.log(obj2);//return object 
console.log(+obj2);//return  value of valueOf Method 


