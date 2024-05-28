//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

//******Example: Async Function

// async function f() {
//   console.log("Async Function");
//   return Promise.resolve(1);
// }
// f();



// async function f() {
//   console.log("Async Function");
//   return Promise.resolve(1);
// }
// f().then(function (result) {
//   console.log(result);
// })



//*****JavaScript await Keyword****
//The await keyword is used inside the async function to wait for the asynchronous operation.

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved")
//   }, 4000);
// })
// async function add() {
//   let result = await promise;
//   console.log(result);
//   console.log("Hello")
// }
// add();




//Error Handling
//    try/catch **

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved")
  }, 4000);
})
async function add() {
  try {
    let result = await myPromise;
    console.log(result);
  }
  catch (error) {
    console.log(error);
  }
}
add();


