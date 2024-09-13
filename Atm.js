function myfunction(cardNumber){
let number = '';
for(let card = 0; card <= cardNumber.lenght; card++){
	if(cardNumber [card] !=  '-' ){
		number += cardNumber[card]
	}

}

if (number.startsWith('4') || number.startsWith('5') || number.startsWith ('6')&& number.lenght == ('16') ){
	
	return true;
}
		
	  

	return false
		}



console.log(myfunction(5234-5678-9012-3456));


	
	

	
	
