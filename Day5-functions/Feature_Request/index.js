function evenOrodd(number) {
  if (number % 2 == 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
evenOrodd(9);

function sqaure(number) {
  console.log(number * number);
}

sqaure(8);

function concatate (string1, string2) {
    
    console.log(string1.concat(string2));
  
}

concatate("Hello " , "World")
const sum = (a, b) => {
  console.log(`sum of ${a} and ${b} is: ${a+b}`);
};

sum(2 , 3);

const applyFunctionTimes = (func, times) => {
  for (let i = 0; i <= times; i++) {
    func();
  }
};

const exampleFunction = () => {
  console.log("Function called");
};

applyFunctionTimes(exampleFunction, 5);
