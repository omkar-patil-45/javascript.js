let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked ");

// };

btn1.addEventListener("click", (evt) => {
  console.log("Button was clicked");
  console.log(evt);
  console.log(evt, type);
})


let div = document.querySelector("div");

div.onmouseover = () => {
  console.log("You are inside div")
}