let user ={
   Fname:'Arun',
   Lname:'Kumar',
   FullName:function(){
     return this.Fname+" "+this.Lname;
   },
FullName1(){
     return this.Fname+" "+this.Lname+" this is ES6";
},
["Skills"]:"JS,Python",
  
}
console.log(user.FullName());
console.log(user.FullName1());

let age="age";
user[age]=34;
console.log(user)
