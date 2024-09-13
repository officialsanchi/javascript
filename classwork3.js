function Calculator(leftOperant,rightOperant,operators){

if(operators == "+"){
	return leftOperant + rightOperant;
}
else if(operators == "-"){
	return leftOperant - rightOperant;
}
else if(operators == "/"){
	return leftOperant + rightOperant;
}
else if(operators == "*"){
	return leftOperant * rightOperant;
}
else{
	return  'Nan';
	}
}
const  result = Calculator(10,  5 , '+');
console.log('The result is : ' + result);








