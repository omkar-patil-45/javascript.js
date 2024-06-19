//you can also pass a function as an argument to a function. CallMe is a callback function passed as a argument

// function greet(name, callback) {
//   console.log("Hi", name);
//   callback();
// }
// function callMe() {
//   console.log("I am Call Back Function");
// }
// greet("Omkar", callMe);



// In this example, we are going to use the setTimeout() method to mimic the program that takes time to execute, such as data coming from the server.

// function greet() {
//   console.log("Hello World");
// }
// function sayName(name) {
//   console.log("Hello", name);
// }
// setTimeout(greet, 2000);
// sayName("Omkar");



//Example: Using a Callback Function
// function greet(name, myFunction) {
//   console.log("Hello World");
//   myFunction(name);
// }
// function sayName(name) {
//   console.log("Hi", name);
// }
// setTimeout(greet, 2000, "Omkar", sayName);

// const greet = (name, myFunction) => {
//   console.log("Hello World");
//   myFunction(name);
// };

// const sayName = (name) => {
//   console.log("Hi", name);
// };

// setTimeout(greet, 2000, "Omkar", sayName);


// function greet(name, myFunction) {
//   console.log("Hello World");
//   myFunction(name);
// }
// function sayName(name) {
//   console.log("Hi", name);
// }
// setTimeout(greet, 2000, "Omkar", sayName);


// function greet(add) {
//   console.log(add);
// }
// function calculate(a, b, callback) {
//   let sum = a + b;
//   return sum;
//   callback(sum);
// }
// let result = calculate(5, 5);
// greet(result);





