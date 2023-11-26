var fullName="Arun Kumar";

var obj={
	fullName: "My Name is Arun Kumar",
	prop: {
		fullName: "inside prop Arun Kumar",
		getFullName: function () {
			return this.fullName;
		}
	},
	getFullName: function () {
		return this.fullName;
	},
	getFullName3: (function() {
		return this.fullName;
	})(),
	getFullName2: () => this.fullName

}

console.log(obj.prop.getFullName())
console.log(obj.getFullName());
console.log(obj.getFullName2())
console.log(obj.getFullName3)
