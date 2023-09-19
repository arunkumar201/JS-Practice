
let emp = {
  userId: "rirani",
  jobTitleName: "Developer",
  firstName: "Romin",
  lastName: "Irani",
  preferredFullName: "Romin Irani",
  employeeCode: "E1",
  region: "CA",
  phoneNumber: "408-1234567",
  emailAddress: "romin.k.irani@gmail.com",
};
console.log(emp)

// for (let i in emp) {
//     console.log(`Key:${i}: Value:${emp[i]}`);
// }

let empMap=new Map(Object.entries(emp));

for(let i of empMap.entries()){
     console.log(`Key:${i}: Value:${emp[i]}`);
}

// console.log(emp)


for(let emp of empMap.entries()){
   console.log(`${emp[0]} ${emp[1]}`);
}


for(let i of empMap.keys()){
   console.log(i)
}
