//Declare an Empty Multi-dimension Array
//let stu=[];

//now intialize with some values

let stu = [
  ["arun", 7008],
  ["ram", 7009],
  ["raju", 7010],
  ["Krishna", 7011],
  ["ramu", 7012],
];
console.log(stu);
console.table(stu);
console.log(stu[0][0]);
console.log(stu[0][1]);
console.log(stu[1][0]);
console.log(stu[1][1]);
console.log(stu[2][0]);
console.log(stu[2][1]);

stu.push(["Ankush",7012]);
console.log(stu);//add at the end

stu.splice(1,0,["arun kumar",1000]);
console.table(stu);



//iterating 
stu.forEach((info)=>{
    info.forEach((data=>{
        console.log(data)
    }));
});

//or
for(let i of stu){
    for(let j of i){
        console.log(j)  
    }
}
//or
for(let i=0;i<stu.length;i++){

    let innerArrayLength =stu[i].length;
   
    for(let j=0;j<innerArrayLength;j++){

        console.log(stu[i][j]);
    }
}
