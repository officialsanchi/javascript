
//nested function
function outerFun(numOne, numTwo){
	console.log('outer function');
	function innerFun(secondNum){
	return numOne * secondNum
	}
	return innerFun(numTwo);
}
console.log(outerFun( 2, 5));
	function outerFunction(){
		console.log("outer function");
		function innerFunction(){
		console.log("inner function");
		return outerFunction;
	}
return innerFunction();
}

console.log(outerFunction(2,3));

	// arrow function

const result = (numOne, numTwo)=>{
	numOne + numTwo

}
console.log(result(2,3))

	//function as a returned object

function calculate(){
	return {
		add:function(a,b){
			return a*b;
		},
		substract:(a,b)=>{
			return a-b;
		}

	};
};


	
