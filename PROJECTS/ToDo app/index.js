let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  ul.appendChild(item);
  input.value = "";
  // item.remove();
  
});

ul.addEventListener("click", function(e) {
  if (e.target.nodeName == "BUTTON") {
    let itemList = e.target.parentElement;
    itemList.remove();
    console.log("deleted");
    
  }
});

// let delbtns = document.querySelectorAll(".delbtn");
// for(delbtn of delbtns){
//   delbtn.addEventListener("click", function() {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
    
//   });
// }