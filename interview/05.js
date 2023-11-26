for (var i=0;i<10;i++) {
	// console.log(i);//1 2 3 4 5 6 7 8 9 10
	setTimeout(() => console.log(i), 1000); //10 10 10 10 10 10 10 10 10 10
}
for (let i = 0; i < 10; i++) {
	console.log(i); //1 2 3 4 5 6 7 8 9 10
	setTimeout(() => console.log(i), 1000); //10 10 10 10 10 10 10 10 10 10
}
