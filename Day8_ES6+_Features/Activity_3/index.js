// Spread & Rest operator
// Diff between rest and spread operator , Rest - use to access  elements and assigning it to new varible, Spread - Use over itreable arrays or objects , mainly for purpose of copying, merging , manupilating

// New array using spread operator
const arrayOne = [4, 6, 8, 10];
const newArray = [2, ...arrayOne, 12, 14, 16, 18, 20];
console.log(newArray);

// Combine arrays into a new one

// array
const odd = [1, 3, 5, 7, 8, 9];
const even = [2, 4, 6, 8, 10];
const number = [...odd, ...even];
console.log(number);

// object
const upperMoon = {
  demonName: "kokoshibu",
  demonRank: 1,
  power: "Moon breathing",
};

const demonSlayer = {
  name: "Gyomie",
  rank: 1,
  ability: "Stone breathing",
};

const combine = { ...demonSlayer, ...upperMoon };
console.log(combine);

// Copying using
const superHero = ["ironman", "spiderman", "superman"];
const heros = [...superHero];
console.log(heros);

// object
const demonKiller = {
  name: "Tanjiro",
  rank: 1,
  ability: "sun breathing",
};

const newObject = { ...demonKiller };
console.log(newObject);

// rest operator in a function
let initial = 0;

function Task6(...rest) {
  const array = [...rest];
  for (let index = 0; index <= array.length; index++) {
    initial += index;
  }
  return initial
}

console.log(Task6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
