const { sumOfNumbers} =require("../fireDirll/secondFireDrill/sum")

test("add two numbers base on index", ()=>{
    let arraysOfNumbers = [2,3,4,5,6,7]
    let result = sumOfNumbers(arraysOfNumbers)
    expect(result).toBe ([5,9,13])

})