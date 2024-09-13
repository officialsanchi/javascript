	
function largest(number){
let num1 = number[0];
let num2 = number[0];

for(let count = 0; count < number.length; count ++){
	if(number[count] < num1){
	num1 = number[count]
	}
	if(number[count] > num2){
	num2 = number[count]
	}
}

console.log(num1);
console.log(num2);

}

largest([2,3,4,78,90,1,89,78]);


		

