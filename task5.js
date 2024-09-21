function myfunction(number){
let even = 0
let odd = 0
let evenOdd = []
for(let count = 0;count < number.length;count++){
	if(number[count] %2 == 0){
		  even++
}
	else{
		odd++ 
}
	
}
evenOdd.push(even,odd)
return evenOdd
		
	}
console.log(myfunction([2,1,5,7,8]));

	


