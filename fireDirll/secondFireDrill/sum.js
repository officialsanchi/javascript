function sumOfNumbers(numbers){
    let element = 0;
    let index = []

    for(let count = 0; count = numbers.length; count ++){
        //element+= numbers[count];
        if( count %2 != 0){
            
           index.push(numbers[count -1] + numbers[count])
          // element = 0;
        }
        index.splice

    }

    return index
}

module.exports = {sumOfNumbers}
//let num = [];
  //num.push(2, 3, 4, 5, 6, 7)
  //console.log(sumOfNumbers(num));
  //let numOne = [];
  //numOne.push(1, 3, 5, 1, 6, 3);
  //console.log(sumOfNumbers(numOne));
 

