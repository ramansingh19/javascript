// let btn = document.querySelector("button");

// btn.addEventListener("click", function (){
//     let h2 = document.querySelector("h2");
//     let randomcolor = getRandomcolor();
//     h2.innerText = randomcolor ;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor ;

//     console.log("color changed");
    
    
// });

// function getRandomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

// let button = document.querySelector(".btn");

// button.addEventListener("click", function() {
//   console.log("clicked button");
  
// })


let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
  console.log('clicked');
  
})

let button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log(this);
  this.style.backgroundColor = "pink";
});