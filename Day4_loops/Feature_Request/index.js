function print1To10(num) {
  for (let index = 1; index <= num; index++) {
    console.log("for loop:",index);
  }

  let i = 1;
  while (i <= num) {
    console.log("while loop:", i);
    i++;
  }
}

print1To10(10)

function multipleTabel (table , length){
    let fiveTable = table
    for (let index = 1; index <= length; index++) {

        console.log(fiveTable * index);
    }
}

multipleTabel(5,10)

function patternStar (rows){
    let pattern = ""
    for (let index = 0; index <= rows; index++) {
        console.log(pattern += "*");

    }
}

patternStar(5)

function sumCalculation (limit) {
    let i = 1
    let num = 0
    while (i <= limit) {
      num += i
      i++
    }
    console.log(num);
}

sumCalculation(10)

function factorialScript(factorialNumber) {
  let i = factorialNumber;
  let factorailTotal = 1;
  do {
    factorailTotal *= i;
    i--;
  } while (i >= 1);

  console.log(factorailTotal);
}

factorialScript(5);
