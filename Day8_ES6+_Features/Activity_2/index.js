// Destructuring means accessing elements from array and assigning it to a separate varible for better readablity.

////////  Array Destructring     ////////

// non-destructure
const evenNumber = [2,4,6,8,10,12,14,16]
const firstValue = evenNumber[0]
const secondValue = evenNumber[1]

console.log(firstValue);
console.log(secondValue);

// Destructring

const [first , second , third] = evenNumber
console.log(first);
console.log(second);

// skip element
const [ one, two ,, fourth]  = evenNumber

console.log(one);
console.log(fourth);
// console.log(three);

// Swapping
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1

// nested 
const [x, [y,z]] = [1,[2,3]]

console.log(x);
console.log(z);

// Rest operator destructring
const [p,r,q, ...n] = [1,2,3,4,5,6,7]

console.log(r);
console.log(n);


////////  Object Destructring     ////////


const book = {
    title: "Courage to be disliked",
    author: "sumita ",
    price : 320
    
}

// default value
const {title , author , yearPublished = 2020} = book

console.log(title, author ,yearPublished);

// Rest operator

const bookMere = {
    name: "Courage to be disliked",
    author: "sumita ",
    price : 320
    
}

const { name , ...rest} = bookMere

console.log(title , rest);
