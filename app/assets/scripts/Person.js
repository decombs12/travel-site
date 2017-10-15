function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello, name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

// module.exports = Person;

console.log("hello from Person.js");

exports.exampleProperty = "Super magical example value";
exports.exampleFunction = function() {
	alert("This is an example.");
}