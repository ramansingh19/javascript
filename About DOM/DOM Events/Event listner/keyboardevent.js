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
  
  console.log(`code is : ${e.code}`);
  if(e.code == 'ArrowRight'){
    console.log("character move toward the right ");
    
  }else if(e.code == "ArrowLeft"){
    console.log("character move toward the left");
    
  }else if(e.code == "ArrowUp"){
    console.log("character move toward the upward direction");
    
  }else if(e.code == "ArrowDown"){
    console.log("character move toward the backward direction");
    
  }
  // console.log(e);
  // console.log(`key pressed is : ${e.key}`);
  // console.log("clicked");
  
})
