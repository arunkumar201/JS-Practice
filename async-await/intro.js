//async function always returns a promise
async function getUsers() {
	return "Hello World!"
}
// const data=getUsers()
// console.log(data) // async function always returns a promise we will get promise as pending 
// getUsers().then(res => {
// 	console.log(res)
// })


//async await 
function myPromiseFunction_async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });
}

// (async () => {
//     console.log('Start');
//     const result = await myPromiseFunction_async();
//     console.log(`result - ${result}`);
//     console.log('End');
// })();
//output
//start
//result-success
//End
//same example with then 
function myPromiseFunction_then() {
	return new Promise((res, rej) => {
		   setTimeout(() => {
            res('Success');
        }, 2000);
	})
}
(async () => {
	console.log("Start");
	myPromiseFunction_then().then(result => {
		console.log(`result - ${result}`);
	});
	console.log("End");
})();
//output 
// Start
// End
// result - Success
