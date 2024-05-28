// let heading = document.getElementById("heading");
// console.log(heading);

// let div = document.querySelector("div")
// div.style.backgroundColor = "Black";
// div.style.fontSize = "25px";
// div.innerText = "Omkar"


//******************************************************************** */
let newbtn = document.createElement("button");
newbtn.innerText = "click Me";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);
// **********************************************************************

let para = document.querySelector("p");
// para.setAttribute("class", "newClass");
para.classList.add("newClass");