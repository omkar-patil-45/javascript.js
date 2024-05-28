// export function user(name) {
//   return `Hello ${name}`;
// }
//**************************************************************** */

// export const name = "Javascript";

// export function sum(a, b) {
//   return a + b;
// }
//**************************************************************** */

// export function myFunction(a, b) {
//   if (b === undefined) {
//     b = 2;
//   }
//   return a * b;
// }

//****************************************************************** */

export function fun() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];

  }
  return sum;
}
