const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const onlyEven = numbers.filter((x) => x % 2 == 0  )

console.log(onlyEven);

const doubleEachNumber = numbers.map((x) => x*2)
console.log(doubleEachNumber);

const sumOfNumber = numbers.reduce((previousNumber , currentNumber) => {
    return previousNumber + currentNumber
} ,0 )

console.log(sumOfNumber);