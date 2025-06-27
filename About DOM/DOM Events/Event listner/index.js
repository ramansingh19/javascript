let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let button = document.querySelector("button");
let div = document.querySelector("div");

h2.addEventListener("click", getresult);
h3.addEventListener("click", getresult);
p.addEventListener("click", getresult);
button.addEventListener("click", getresult);
div.addEventListener("click", getresult)


function getresult() {
  console.dir(this.innerHTML);
  this.style.backgroundColor = "pink";
  
}