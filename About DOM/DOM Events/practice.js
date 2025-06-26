let btn = document.querySelector("btn");

btn.addEventListener("click", function () {
  let h2 = document.querySelector("h2");
  let randomcolor = getRandomcolor();
  h2.innerText = randomcolor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;

  console.log("color changed");
});

function getRandomcolor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
