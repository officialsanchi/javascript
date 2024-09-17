const {sumEvenNumbers, findMax,countOddNumbers,isPrime,findFirstDuplicate,reverseArray,factorial, isPalindrome,sumMultplesOfThreeAndFive} = require("./task1.js");

test("sum of all even number", () =>{
	let arraysOfNumbers = [2,3,4,6]
	let result = sumEvenNumbers(arraysOfNumbers);
	expect(result).toBe(12);

})
test ("find max number", () =>{
	let maxNumber = [20,30,50,4]
	let result = findMax(maxNumber);
	expect(result).toBe(50);
})
test(" count of odd number", () =>{
	let oddNumber = [2,3,4,5,6,7]
	let result = countOddNumbers(oddNumber);
	expect(result).toBe(3);
})
test("find the prime number", () =>{
	let result = isPrime(8);
	expect(result).toBe(true);
})
test("find First Duplicate",()=>{
	let duplicate = [2,5,76,98,7,2,76]
	let result = findFirstDuplicate(duplicate);
	expect(result).toBe(2);
})

test("reverse array number", () =>{
	let reverse = [2,5,76,98,7];
	let result = reverseArray(reverse);
	expect(result).toEqual([7,98,76,5,2])
	})
test("factorial",() =>{
	let factorialNumber = (5);
	let result = factorial(factorialNumber)
	expect(result).toBe(120);
 })
test("is palindrome", () =>{
	let palindrome = ("racecar");
	let result = isPalindrome(palindrome);
	expect(result).toBe(true); 
})
test("sum multples of three and five", () =>{
	let multple = 15;
	let result = sumMultplesOfThreeAndFive(multple);
	expect(result).toBe(75);
})





