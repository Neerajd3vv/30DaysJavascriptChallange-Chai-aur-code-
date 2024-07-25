const arrowCalculate = (num1,num2) => {
 console.log(num1+ num2);
}

arrowCalculate(1,2)

const checkString  = (string ,word) => {
    const stringCheck = string.includes(word)
    if (stringCheck) {
        return true
    } else {
        return false
    }
}

console.log(checkString("sharphner" , "z"));
