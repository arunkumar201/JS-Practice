const MyInfo = {
	name: "arun kumar",
	sayName: function () {
		console.log(this.name);
	},
};

// setTimeout(MyInfo.sayName.bind(MyInfo), 3*1000);//arun kumar
// setTimeout(MyInfo.sayName, 3*1000);//undefined
// setTimeout(() => MyInfo.sayName.call(MyInfo), 3 * 1000); ///arun kumar
setTimeout(() => MyInfo.sayName(), 3 * 1000); ///arun kumar
