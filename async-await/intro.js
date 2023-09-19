//async function always returns a promise
async function getUsers() {
	return "Hello World!"
}
const data=getUsers()
console.log(data) // async function always returns a promise we will get promise as pending 
getUsers().then(res => {
	console.log(res)
})
