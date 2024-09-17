const book = {
	title: 'The Great Gatsby',
	author: 'F.Scott Fitgerald',
	yearPublished: 1925
};
let{ title,author} = book
console.log(title + 'by' + author);


const car = {make:"Toyota",
	model: "Camry",
	year: 2021};
function objectAndLoop(car){
	for(let count in car){
	
console.log(count, car[count])

	}

	};
objectAndLoop (car);


const counter = {
	 count: 0,
	step : 1,
  	increment:function(){
	this.count += this.step
	return this.count
	},
	 decrement:function(){
	this.count-= this.step
	return this.count
	}
}
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


const personOne = {firstName: 'chidinma', lastName: 'dunni',fullName:function(){
	 return this.firstName  + ' ' + this.lastName ,	
	}

}
console.log(personOne.fullName());

const personTwo = {firstName: 'chidinma', lastName: 'dunni', age: 21}

	let value = ""

function personObject(firstName, lastName,age){
	for(for count in personTwo){
		value  +'' + personTwo}
		return value;	
}
console.log(personObject());
	
