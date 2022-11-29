var lastname = "prajpati";
var firstname = "arun Kumar";
// export default firstname;
 const getName=()=>{
    return "Hello World";
}
let emp={
    name:"Ravi",
    salary:'94k',
    position:'Senior SDE',
    email:'abc123@bit.com'
}
const getEmp=() => {
    console.log(emp.name);
    return emp.position;
}
export default getName;
export { lastname, firstname as ln, getEmp};