// Activity 1
// Task 1
function x() {
  throw new Error("error occurred!");
}

try {
  x();
} catch (error) {
  console.log(error.message);
}

// Task 2
function y(a, b) {
  if (b <= 0) {
    throw new Error("Denominator is zero or less");
  } else {
    console.log("Divided value ", a / b);
  }
}

try {
 y(4,0)
} catch (error) {
  console.log(error.message);
}

// Activity 2
// Task 3
function random () {
  try {
    console.log("try catch message!");
  } catch (error) {
    console.log(error);
  }
  finally{
    console.log("flow ended");
  }
}
random()

// Activity 3
// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function that throws an instance of the custom error
function throwCustomError() {
  try {
    throw new CustomError("This is a custom error.");
  } catch (error) {
    console.log("Caught custom error:", error.message);
  }
}

// Call the function to throw and handle the custom error
throwCustomError();


// Task 5
function checkUserInput (username) {
//  const type = typeof(username)
 if (username.length <= 0 ) {
  throw new Error(" string is empty")
 } else {
    console.log("string is not empty");
 }
}

try {
  checkUserInput("")
} catch (error) {
  console.log(error.message);
}

// Activity 4
// Task 6
function randomPromise() {
  const value = Math.ceil(Math.random() * 10);
  return new Promise((resolve, reject) => {
    if (value % 2 == 0) {
      console.log(value);
      resolve("promise resolved!");
    } else {
      console.log(value);
      reject("Error occurred!");
    }
  });
}
randomPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7
function randomPromiseTwo() {
  const value = Math.ceil(Math.random() * 10);
  return new Promise((resolve, reject) => {
    if (value % 2 == 0) {
      console.log(value);
      resolve("promise resolved!");
    } else {
      console.log(value);
      reject("Error occurred!");
    }
  });
}

async function handler() {
  try {
    const data = await randomPromiseTwo();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

handler();

// Activity 5
// Task 8

const fakeApi =  fetch("https://random-fake.com/i=2")
fakeApi.then((resolve)=>{
  return resolve.json()
}).then((result) => {
  console.log(result.data);
}).catch((error) => {
  console.log("Error occurred check you url ",error);
})


//Task 9

async function fakeApiHandler () {
 try {
  const response =   await fetch("https://fake-api.com")
const result = await response.json()
console.log(result.data);
 } catch (error) {
  console.log( "Error occurred invalid API", error);
 }
}

fakeApiHandler()
















