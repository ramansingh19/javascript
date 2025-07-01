let user = document.querySelector("#user");
let p = document.querySelector("p");

user.addEventListener("input", function() {
  console.log(user.value);
  p.innerHTML = user.value;
});