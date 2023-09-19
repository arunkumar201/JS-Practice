let Arun = { name: "Arun", age: 20, phoneNumber: 123 },
  Ram = { name: "Arun", age: 21, phoneNumber: 823 },
  Anil = { name: "Arun", age: 26, phoneNumber: 253 },
  Rajesh = { name: "Arun", age: 25, phoneNumber: 162 };

let userRoles = new Map([
  [Arun, "Director"],
  [Ram, "administrator"],
  [Anil, "CEO"],
  [Rajesh, "CFO"],
]);

//Over Keys
for (let user of userRoles.keys()) {
  console.log(
    `Name:${user.name}
             Age:${user.age}
             Phone Number:${user.phoneNumber}`
  );
}

//over the values
for (let uservalue of userRoles.values()) {
  console.log(uservalue);
}

userRoles.forEach((role, user) => {
  console.log(`${user.name}: ${role}`);
});

let key = [...userRoles.keys()];
console.log(key);

let value = [...userRoles.values()];
console.log(value);

//weak Map 
//We can not iterate the Weak Map
//The Keys of the weak Map Must be a AN Object
let weak_Map=new WeakMap();
let obj1={'Name':'Arun'}
let obj2={'Name':'Ramesh'}
weak_Map.set(obj1, "CEO");
weak_Map.set(obj2, "Founder");
console.log(weak_Map.get(obj1));
console.log(weak_Map.get(obj2));
console.log(weak_Map.has(obj1));