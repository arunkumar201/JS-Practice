var a=new Object();
a.f_Name = "Arun";
a.Last_Name = "Kumar";
a.city = "Delhi";
a.fullName = function() { 

    console.log(this.f_Name+" "+this.Last_Name);

}

// console.log(a.fullName);
//  a.fullName();
// console.log(a.city);
// console.log(a.Last_Name);

delete a.f_Name;
console.log(a.f_Name);
console.log(a)
 console.log(a.fullName);
 console.log(a.fullName());
console.log(a.city);
console.log(a.Last_Name);

console.log('f_Name ' in  a );

