class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName; // this object I'm makings key with the name firstName, its value is whatever name we pass in
		this.lastName = lastName;
	}
	get fullName() {
		return this.firstName + " " + this.lastName;
	}
	set fullName(fullName) {
		let name = fullName.split(" "); // 2nd note: NOT INSIDE AN OBJECT an array of 1st and last name. If it has two items the name is valid
		// "Ron Cagle" split(" ") = ["Ron", "Cagle"]
		if (name.length === "2") {
			this.firstName = name[0];
			this.lastName = name[1];
		} else {
			console.log("Invalid name!");
		} // the program will continue to do nothing as told
	}
}

// let person = new Person("Peter", "Ivanov");

// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter Parker";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson
