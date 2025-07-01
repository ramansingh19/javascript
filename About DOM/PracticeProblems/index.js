// // Que 1 :- Try out the following events in Event Listener on your own :
// // - mouseout
// // - keypress
// // - Scroll
// // - load


// //   let btn = document.getElementById("btn");
// // //you can use up and down arrow keys to scroll the page.
// //   btn.addEventListener("mouseout", () => {
// //     alert("Mouse moved out of the button!");
// //   });

 
// //   document.addEventListener("keypress", function (event) {
// //     alert("You pressed: " + event.key);
// //   });




// //   window.addEventListener("scroll", () => {
// //     console.log("You scrolled the page!");
// //   });



// //   window.addEventListener("load", () => {
// //     alert("Page is fully loaded!");
// //   });

// //Que 2 :-Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

  let button = document.createElement("button");
  button.innerText = "Click Me";

  // 2. Style the button a little
  button.style.padding = "20px 30px";
  button.style.fontSize = "26px";
  button.style.justifyContent = "center";
  button.style.display = "flex";

  // 3. Add click event listener
  button.addEventListener("click", function() {
    button.style.backgroundColor = "green";
    
  });

  // 4. Add the button to the body
  document.body.appendChild(button);

  //Que3 :- 

   let input = document.getElementById("nameInput");
    let heading = document.getElementById("displayName");

    input.addEventListener("input", function () {
      // Allow only letters and spaces using regex
      let filteredText = input.value.replace(/[^a-zA-Z ]/g, "");
      heading.innerText = filteredText;
    });
    
    

