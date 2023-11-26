const obj={
	name: 'arun',
}
console.log("===============")
console.log(obj.name);
delete obj.name

console.log(obj.name)

///IF we create a object using object.create() then object is 
//not getting deleted as it put the object into Prototype

const obj1=Object.create({
	name:'arun'
});
console.log(obj1.name);
delete obj1.name	

console.log(obj1.name);
console.log(obj1);	
