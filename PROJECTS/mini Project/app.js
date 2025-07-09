let en = document.querySelector(".en");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

en.addEventListener("click", function(e) {
  console.log(" div button clicked");
  
});

ul.addEventListener("click", function(e) {
  e.stopPropagation();
  console.log(" ul button clicked");
  
});


  lis.addEventListener("click", function(e) {
    e.stopPropagation();
  console.log(" list button clicked");
  
});



