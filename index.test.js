const {add, subtract, evenNumbers} = require ("./index.js");

	let numberOne = 2;
	let numberTwo = 29;

test("add two number:", ()=>{
	
	let result = add (numberOne,numberTwo);
	let expected = 31;
	expect(expected ).toBe(result);

	})
test("subtract two number :", ()=>{
	let numberOne = 2;
	let numberTwo =  29;
	let result = subtract(numberTwo,numberOne);
	let expected = 27;
	expect (expected).toBe(result);
})

test("return evenNumbers", () =>{
	
	let  arraysOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arraysOfNumbers);
	expect(result).toEqual([2,4,6]);

})