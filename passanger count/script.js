let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


console.log(saveEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  //Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
  
  //Render the variable in the saveEl using innerText
  saveEl.innerText += countStr;
  countEl.innerText = 0;
  count = 0;

  console.log(count);
}