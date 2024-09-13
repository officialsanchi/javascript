
function sumEvenNumbers(numbers){
	let sum = 0;
	for(let count in numbers){
	if(numbers[count] %2 == 0){
	sum += numbers[count]
	}

	}
	return sum;
}


function findMax(number){
	let large = 0;
	for(let count in number){
	if(number[count] > large){
	large+= number[count]
	 
		}
	}
	return large;
}
function countOddNumbers(number){
	let odd = 0;
	for(let count in number){
	if(number[count] %2 == 1){
	odd ++;	
		}
	}
	return odd;
}
function isPrime(number){

	let sumPrime = 0;
	for(let count = 1; count < number; count ++){
	if(number % count == 0){
		sumPrime++;
		}
	}
	return sumPrime == 0? false: true;


	}
function findFirstDuplicate(number){
	for(let count = 0; count < number.length; count++){
	for(let counter = number.length-1; counter >= 0; counter--){
	
	if(count == counter){
		continue;
	}
	if(number[count] == number[counter]){
	return number[count];
	}

		}
	return -1;
	}
}
function reverseArray(number){
	let sum = [];
	for(let count = number.length-1 ;count >= 0; count--){
	sum.push(number[count]);
	}
	return sum;	
}

function factorial(number){
	let sum = 1;
	
	for(let count = 1; count <= number; ++count){
	  sum *= count ;
	}
	return sum ;
}
function isPalindrome(number){
	let alpha = "";
	for(let count = number.length-1; count >=0; count --){
		alpha = alpha + number;
	}
		if(number == alpha){
		return true
}
	if(number != alpha){
	return false;
}

	}	
module.exports = {sumEvenNumbers, findMax,countOddNumbers,isPrime,findFirstDuplicate,reverseArray,factorial, isPalindrome};



