function frOne() {
  const arry = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(arry);
  arry.push(9);
  console.log(arry);
  arry.pop();
  console.log(arry);
  arry.unshift(0);
  console.log(arry);
  arry.shift();
  console.log(arry);
}
// frOne()

function frTwo() {
  const randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const x = randomNumber.map((x) => x * 2);
  console.log(x);
  const y = randomNumber.filter((x) => x >= 4);
  console.log(y);
  const z = randomNumber.reduce((initialValue, currentValue) => {
   return initialValue + currentValue;
  }, 0);
  console.log(z);
}

// frTwo();

function frThree () {
    const upperMoons = ["kokoshibo" ,"doma" ,"akaza" ,"hantengu" ,"gyokko"]
    
    for (let index = 0; index < upperMoons.length; index++) {
        const element = upperMoons[index];
        console.log(element);
        
    }

    upperMoons.forEach(x => console.log(x))
}

// frThree()

function frFour () {
    const matrixArray = [
        ["pizza" , 240 , "pizzaHut"],
        ["Burer" , 80 , "burker king"],
        ["momos" , 140 , "Doon momos"],
    ]

    console.log(matrixArray);
    console.log(matrixArray[1][2]);
}

frFour()