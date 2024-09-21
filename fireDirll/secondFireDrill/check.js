function addArray(value){
    let addElement = 0;
    let result = []
      for(let index = 0; index <value.length; index++){
        addElement += value[index];
        if(index % 2 != 0){
          result.push(addElement)
          addElement = 0;
        }
      }
      return result;
  }
  
  
  
  
  let number = [];
  number.push(2, 3, 4, 5, 6, 7)
  console.log(addArray(number));
  let numberOne = [];
  numberOne.push(1, 3, 5, 1, 6, 3);
  console.log(addArray(numberOne));