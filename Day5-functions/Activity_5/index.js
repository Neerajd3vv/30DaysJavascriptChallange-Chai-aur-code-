function highOrderFuntion(fun, times) {
  for (i = 1; i <= times; i++) {
    fun(i);
  }
}

const kidFuntion = (i) => {
  console.log(`Hello ${i} time`);
};

highOrderFuntion(kidFuntion, 5);

// function zebra(function1, times) {
//   for (let i = 1; i <= times; i++) {
//     function1(i);
//   }
// }

// const fun2 = (i) => {
//   console.log(`hello from function 2 ${i} times`);
// };

// const fun1 = (i) => {
//   fun2(i);
// };

// zebra(fun1, 5);


function one (functionTwo , functionThree , value
    
) {
    const fun2Result = functionTwo(value)
    const fun3Result = functionThree(fun2Result)
    console.log(fun3Result);
}

const functionTwo = (value) => {
  return value * 2
}

const functionThree = (value) => {
 return value + 6
}

one ( functionTwo , functionThree , 4)