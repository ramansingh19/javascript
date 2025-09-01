let  val1 = 10;
let val2 = 30;

function addtwo(num1 , num2) {
  let total = (num1 + num2);
  return total;
}

let total2 = addtwo(val1 , val2)
// console.log(total2);

let total1 = addtwo(30,40);
// console.log(total1);



//call stack --> follows the LIFO method 
// The call stack is a special part of memory in JavaScript (and many other languages) where function calls are tracked and managed.

// Think of it like a stack of plates in a cafeteria:

// You can put a plate on top (when a function is called).

// You can only remove the top plate (when a function finishes).

// The last plate you put on is the first one you remove → this is called LIFO (Last In, First Out).


let counter = 0;
function one() {
  console.log("one");
  if (counter++ > 5) return; // stop after 6 calls
  two();
  // console.log(new Error().stack);
}

function two() {
  console.log("two");
  if (counter++ > 5) return;
  three();
//   console.log(new Error().stack);
}

function three() {
  console.log("three");
  if (counter++ > 5) return;
  one();
  // console.log(new Error().stack);
}

// one();

// one();
// two();
// three();