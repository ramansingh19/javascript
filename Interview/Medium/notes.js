//Medium level questions


//Explain scope and lexical scope in JavaScript.
//Global scope 
let name = 'Raman';
const info = () => {
  //console.log(name);
  
}
//info()

//Function Scope
function test() {
  let message = "Hello inside function";
  //console.log(message); // ✅ works
}
test()
//console.log(message); // ❌ ReferenceError

//Block scope
let data = () => {
  let name = 'Aman'
  //console.log(name);
  
}
data()

//Lexical Scope
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    //console.log(outerVar); 
  }

  inner();
}

outer();


//IIFE--> (immediately invoked function expressions)
(function () {
  //console.log("I run immediately!");
})();

(() => {
  //console.log('Arrow Function');
  
})();

((name) => {
  console.log(`My name is ${name}`);
  
})('Raman');
// The function is wrapped inside parentheses ( ... ) → this turns it into a function expression (not a declaration).
// Then, the trailing () immediately invokes (executes) the function.

//Event Flow visualizaton 
// Document
//    ↓ (Capturing)
// <html>
//    ↓
// <body>
//    ↓
// <div>
//    ↓
// <button> ← Target
//    ↑ (Bubbling)
// </div>
// ↑
// <body>
// ↑
// <html>
// ↑
// Document

//Event Bubbling


//settimeout 
(
  function data(){
    console.log("start");
    
    setTimeout(() => {
      console.log("printed");
      
    }, 1000)
    console.log("end");
    
  }
  
)()


//closure
function closure(){
  let char = 1;
  return function() {
    return char++;
    
  }
}

const count = closure()
console.log(count());
console.log(count());
console.log(count());
