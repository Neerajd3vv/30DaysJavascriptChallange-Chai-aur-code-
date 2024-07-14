// Arithmetic operator
function arithmetic (a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a % b);
}

arithmetic(5,2)


// Comparison and logical operators script

function colos (num1 , num2){
      console.log(num1> num2);
      console.log(num1< num2);
      console.log(num1>= num2);
      console.log(num1<= num2);
      console.log(num1=== num2);
      console.log(num1=== num2);
      
      if (num1 > 2 && num1 < 10) {
        console.log("Both condition fullfills");
      } else {
        console.log("Either one or both conditions failed!");
      } 

      if (num2 === 0 || num2 % 2 == 0) {
        console.log("Any or both condition meet");
      } else {
        console.log("Both conditons failed!");
      }
}

colos(10 ,20)

// Ternary operator script 
function Tos(number){
 console.log(number > 0 ? "positive" : "negative");
}

Tos(-12)
