// let errorPragraph = document.getElementById("error");
// console.log(errorPragraph);

// function purchase() {
//   console.log("button clicked");
//   errorPragraph.innerText = "Something went wrong, please try again"
// }


//////////////////////////////////////////////////////////////////////

// let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function () {
//   // Challenge:
//   // When the user clicks on the "Pick Fighters" button, pick two random 
//   // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
//   let randomIndexOne = Math.floor(Math.random() * fighters.length)
//   let randomIndexTwo = Math.floor(Math.random() * fighters.length)
//   stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
// })

///////////////////////////////////////////////////////////////////////////////////
// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {
  container.innerHTML += "<p>Thank you for Buying!</p>"
}
