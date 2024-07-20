// Enhanced object literals in js is a way to create objects and methods in more readle format

const name = "Neeraj";
const goal = "Get an intership before end of september";
const age = 22;

const useLife = {
  name,
  goal,
  age,
};

// method
useLife.introduce = function () {
  console.log(`Hello everyone im ${this.name} and my age is ${this.age}`);
};

useLife.introduce();
console.log(useLife);

// Object with computed property names from variables

const propertyOne = "name";
const propertyTwo = "email";
const propertyThree = "address";

const obj = {
  [propertyOne]: "Neeraj",
  [propertyTwo]: "Test@gmail.com",
  [propertyThree]: "mumbai",
};

console.log(obj);
