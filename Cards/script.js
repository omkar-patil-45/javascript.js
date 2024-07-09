let errorPragraph = document.getElementById("error");
console.log(errorPragraph);



function purchase() {
  console.log("button clicked");
  errorPragraph.innerText = "Something went wrong, please try again"
}