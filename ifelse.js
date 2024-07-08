// let score = 45;

// // check if score is fifty or greater
// if (score >= 50) {
//   console.log("You passed the examination.");
// }
// else {
//   console.log("You failed the examination.");
// }

// // Output: You failed the examination.

//************************************************************************************************ */
// let age = 17;

// // if age is 18 or above, you are an adult
// // otherwise, you are a minor

// if (age >= 18) {
//     console.log("You are an adult");
// }
// else {
//     console.log("You are a minor");
// }

// // Output: You are a minor

//************************************************************************************************** */

// let rating = 4;

// // rating of 2 or below is bad
// // rating of 4 or above is good
// // else, the rating is average

// if (rating <= 2) {
//     console.log("Bad rating");
// }
// else if (rating >= 4) {
//     console.log("Good rating!");
// }
// else {
//     console.log("Average rating");
// }

// // Output: Good rating!

//************************************************************************************************** */
// let marks = 60;

// // outer if...else statement
// // student passed if marks 40 or above
// // otherwise, student failed

// if (marks >= 40) {

//     // inner if...else statement
//     // Distinction if marks is 80 or above

//     if (marks >= 80) {
//         console.log("Distinction");
//     }
//     else {
//         console.log("Passed");
//     }
// }

// else {
//     console.log("Failed");
// }

// // Output: Passed

//********************************************************************************************************* */

// function findEven(num) {
//   if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// findEven(10);



// 1. Give Discount on age ,grnder for metro Ticket .
// Female gets 50% off.
// Kds under 5 yer age for Free.
// kkids upto 8yers have half ticket
// people over 65 yer oge pay only 30% 

// let age = 70;
// let gender = 'female';
// let finalDiscount;

// if (age <= 5) {
//   finalDiscount = 100;
// } else if (gender === 'female' || age <= 8) {
//   finalDiscount = 50;
// } else if (age >= 65) {
//   finalDiscount = 30;
// } else {
//   finalDiscount = 0;
// }

// console.log(`your final discount is ${finalDiscount}`);


/////////////////////////////////////////////////////////////////
// let score = 45;
// if (score >= 50) {
//   console.log("You passed the examination");
// }
// else {
//   console.log("You failed the examination");
// }


// let checkNUmber = 10;
// if (checkNUmber > 0) {
//   console.log("Positive");
// } else if (checkNUmber < 0) {
//   console.log("negetive");
// } else {
//   console.log("Zero");
// }

// const time = 15;
// if (time < 10) {
//   console.log("good morning");
// } else if (time < 19) {
//   console.log("evening");
// } else if (time < 22) {
//   console.log("Night");
// } else {
//   console.log("Invalid");
// }


// for loop
// let sum = 0;
// const n = 100;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);


// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(`i=${i},j=${j}`);
//   }
// }

// const number = 9;
// for (let i = 1; i <= 10; i++) {
//   const product = number * i;
//   console.log(`${number}X${i}=${product}`);
// }


let traficLight = "Green";
let message = "";

switch (traficLight) {
  case "red":
    message = "stop immediately";
    break;

  case "yellow":
    message = "Preaper to stop";
    break;

  case "Green":
    message = "You can Drive";
    break;

  default:
    message = "Invalide traffice color";
}
console.log(message);

