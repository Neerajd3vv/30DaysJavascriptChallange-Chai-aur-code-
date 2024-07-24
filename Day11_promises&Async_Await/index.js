// Acvtivity 1
// Task 1
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 2000);
// });

// promise.then((res)=>{
//   console.log(res);
// })

// Task 2
// const promiseTwo = new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//     reject("error occured")
//   }, 2000);
// })

// promiseTwo.catch((err) => {
//   console.log(err);
// })

// Activity 2
// Task 3

// const api = (dataFromBackend) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataFromBackend);
//       resolve("promise resolved");
//     }, 3000);
//   });
// };

// api({ useName: "Neeraj", role: "Junior developer", company: "unknown startup" })
//   .then(() => {
//     return api({ useName: "sumit", role: "java developer", company: "google" });
//   })
//   .then(() => {
//     return api({ useName: "raghav", role: "tech lead", company: "Barclays" });
//   });

// Activity 3
// Task 4
// const promiseFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Me resolve ho gaya bhai!");
//     }, 2000);
//   });
// };

// async function papaFuntion() {
//   console.log("Before await");
//   const data = await promiseFunction();
//   console.log(data);
//   console.log("After await");
// }

// papaFuntion();

// Task 5

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("L gy guru!");
//   }, 3000);
// });

// async function bhaijobDedo() {
//   try {
//     await promiseThree;
//   } catch (error) {
//     console.log(error);
//   }
// }

// bhaijobDedo();

// Activity 4
// Task 6
// const promise = fetch("https://dogapi.dog/api/v2/facts");
// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result.data);
//   });

// Task
// function fettingData() {
//   return fetch("https://dogapi.dog/api/v2/facts");
// }

// async function dataFetched() {
//   try {
//     const response = await fettingData();
//     const result = await response.json();
//     console.log(result.data);
//   } catch (error) {
//     console.log("error occucred", error);
//   }
// }

// dataFetched();

// Activity 5

// Task 8 & 9 
const promiseFour = new Promise((response, reject) => {
  setTimeout(() => {
    response("hello, im a promise four!");
  }, 2000);
});
const promiseFive = new Promise((response, reject) => {
  setTimeout(() => {
    response("hello, im a promise five!");
  }, 3000);
});
const promiseSix = new Promise((response, reject) => {
  setTimeout(() => {
    response("hello, im a promise six!");
  }, 4000);
});

// Promise.all([promiseFour,promiseFive,promiseSix]).then((response)=>{
//   console.log(response);
// })

// Task 9 
Promise.race([promiseFour,promiseFive,promiseSix]).then((value)=>{
  console.log(value);
})