const Info={
	name: "Arun Kumar",
	sayName: function () {
		console.log(this.name);
	},
}

const FriendInfo={
	name: "Atu",
	sayName: function () {
		console.log(this.name)
	}
}
FriendInfo.sayName.call(Info)
