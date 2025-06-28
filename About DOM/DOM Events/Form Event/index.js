let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  // console.dir(form);
  
  // console.log(e);
  // // console.dir(.innerHTML);
  // alert("form submit")

  //extracting form data
  // let user = this.elements[0];//form.element[0]
  // let pass = this.elements[1];

  // alert(`Hi , ${user.value} this is your pass : ${pass.value}`)

  
});

let user = document.querySelector("#user")

user.addEventListener("change", function() {
  console.log("change event");
  console.log("final value : ", this.value);
  
  
});

user.addEventListener("input", function() {
  console.log("input event");
  console.log("final value : ", this.value);
  
  
});

