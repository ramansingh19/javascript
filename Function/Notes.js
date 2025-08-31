// console.log("R");
// console.log("A");
// console.log("M");
// console.log("N");
// console.log("A");


function myname() {
  console.log("R");
  console.log("A");
  console.log("M");
  console.log("N");
  console.log("A");

}

// myname();

//add two number
function add(num1 , num2) {
      console.log("Raman");
      return num1 + num2;
      // console.log(num1 + num2);
      
}

// add(3,4);
let result = add(89,78);
console.log("Result :", result  );


//using if
function loginin (username = "OP"){
  if(!username){
      console.log("please enter username first");
      return
  }else{
    return `${username} is just logged in`
  }

}

console.log(loginin("Raman"));


//...rest/spread operator
function cartprize(...num1){
      return `Price of your items : ${num1}`
}

console.log(cartprize(100,200,3000,900,500));

//next
const user = {
  username : "Raman",
  batch : 22,
}

function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and batch is ${anyobject.batch}`);
      
}
//imp..
handleObject(user);

//Array
function returnarray(getarray){
  return getarray[3];
}

console.log(returnarray([
  2000,3000,4000,3000,903
]));
