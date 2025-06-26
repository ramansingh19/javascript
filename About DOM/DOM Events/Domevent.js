//Dom Event 
let btns = document.querySelectorAll('button')

for(btn of btns){
    //handle multiple event at one time , use for single click

    // btn.addEventListener("click", sayclick);
    // btn.addEventListener("click", sayhello);

    //use for double click
      btn.addEventListener("dblclick", function () {
        console.log('you double click the button');
        
      });
    }
    // btn.onclick = sayclick;
    // btn.onmouseenter = function (){
    //   console.log('You are entered');
      
    // }


// let btn = document.querySelector("button");
// console.dir(btn)

// btn.onclick = function() {
//   console.log('button was clicked');
//   alert('sun bee laure')
  
// }

function sayclick () {
  alert('You are Blocked')
}

function sayhello() {
  console.log('got it!');
  
}


