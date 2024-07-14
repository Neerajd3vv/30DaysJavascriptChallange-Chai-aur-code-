function comparisonOperators (firstNum, secondNum){
   
    console.log(firstNum > secondNum);
    console.log(firstNum < secondNum);
    console.log(firstNum >= secondNum);
    console.log(firstNum <= secondNum);
   

}

comparisonOperators(6,4)
comparisonOperators(6,6)

function comparisonTwo (){
    const x = 6
    const y = "6"
    console.log(x == y);
    // Strict check here with value the data types is also gets checked
    console.log(x === y);
}

comparisonTwo()