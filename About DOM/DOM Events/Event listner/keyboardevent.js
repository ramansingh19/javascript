// let btn = document.querySelector("button");
// //single click
// btn.addEventListener("click", function(event){
//   console.log(event);
//   console.log("button clicked");
  
// });
// //after double clicked they are ar working properly
// btn.addEventListener("dblclick", function(event){
//   console.log(event);
//   console.log("button clicked");
  
// });


let inp = document.querySelector("input");
//keydown , keypress , keyup
inp.addEventListener("keyup", function(e) {
  console.log(e.key);
  console.log(e.code);
  console.log("clicked");
  
})
