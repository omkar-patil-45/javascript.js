//Example 1: Program with a Promise

// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is count value");
//   } else {
//     reject("There is no count value");
//   }
// });
// console.log(countValue);


//  using Arrow Function
// const count = true;

// let countValue = new Promise((resolve, reject) => {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);




//**JavaScript Promise Chaining****
//JavaScript then() method
//The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// let countValue = new Promise((resolve, reject) => {
//   resolve("Promised Resolved");
// });
// countValue.then((result) => {
//   console.log(result);
// })
//   .then(() => {
//     console.log("You can call multiple functions this way.");
//   });




//*****JavaScript catch() method***
//The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,


// let countValue = new Promise(function (resolve, reject) {
//   reject('Promise rejected'); 
// });

// countValue.then(
//    function successValue(result) {
//        console.log(result);
//    },
// )

// .catch(
//    function errorValue(result) {
//        console.log(result);
//    }
// );



let countValue = new Promise((resolve, reject) => {
  reject("Promised is rejected");
});
countValue.then((result) => {
  console.log(result);
})
  .catch((result) => {
    console.log(result);
  })






