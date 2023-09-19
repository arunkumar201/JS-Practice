let url1 = "https://jsonplaceholder.typicode.com/todos/1";
let url2 = "https://jsonplaceholder.typicode.com/todos/2";
let url3 = "https://jsonplaceholder.typicode.com/todos/3";
let url4 = "https://jsonplaceholder.typicode.com/todos/4";

//get todos from Api

// const getTodos = async () => {
// 	try {
// 		const resStream1 = await fetch(url1);
// 		const data1 = await resStream1.json();
// 		const resStream2 = await fetch(url2);
// 		const data2 = await resStream2.json();
// 		const resStream3 = await fetch(url3);
// 		const data3 = await resStream3.json();
// 		const resStream4 = await fetch(url4);
// 		const data4 = await resStream4.json();
// 		return [data1, data2, data3, data4];
// 	} catch (error) {
// 		console.debug("🚀 ~ file: todos.js:14 ~ getTodos ~ error:", error);
// 	}
// };
// (async () => {
// 	const result = await getTodos();
// 	console.debug("🚀 ~ file: todos.js:25 ~ result:", result);
// })();

//using promise.all();

const getTodos = async () => {
	try {
		const responseStream = await Promise.all([
			fetch(url1),
			fetch(url2),
			fetch(url3),
			fetch(url4),
		]);
		const dataSet = await Promise.all(
			responseStream.map((resStream) => resStream.json())
		);
		return dataSet;
	} catch (error) {
		console.debug("🚀 ~ file: todos.js:35 ~ getTodos ~ error:", error);
	}
};
(async () => {
	const result = await getTodos();
	console.debug("🚀 ~ file: todos.js:25 ~ result:", result);
})();
