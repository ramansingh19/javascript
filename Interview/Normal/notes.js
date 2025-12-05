//---------------------------------------Interview Questions--------------------
// 01 let
let x = 5;
//console.log(x);

if(true){
  let y = 20;
}
//console.log(y);


// 02 closure --> real life ex
function createBankAccount(intialBalance) {
    let balance = intialBalance;

    return {
      deposit(amount) {
        balance += amount
        return balance;
      },
      withdraw(amount){
        balance-=amount
        return balance
      },
      checkbalance(){
        return balance
      }
    };
}

const account = createBankAccount(10000);
// //console.log(account.deposit(5000));
// //console.log(account.withdraw(5000));
// //console.log(account.checkbalance());


// // 03 Event loop
// // "The event loop allows JavaScript to look synchronous while actually handling asynchronous tasks in the background using the call stack, callback queue, and microtask queue."
// //console.log("Start");

// setTimeout(() => {
//   //console.log("Inside Timeout");
// }, 0);

// //console.log("End");



// // 04 Synchronous
// //console.log("Task 1");
// //console.log("Task 2");

// // // Asynchronous
// // console.log("Start");
// // setTimeout(() => console.log("Async Task"), 1000);
// // console.log("End");


// // 05 Promises in JavaScript
// //A promise is an object that represents the result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Instead of using callbacks, we handle the result with .then() for success and .catch() for errors."

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Data received"), 1000);
// });

// promise
//   //.then(result => console.log(result))   // "Data received"
//   //.catch(error => console.log(error));


// //  06  async/await
// //async/await is syntactic sugar on top of promises. It makes asynchronous code look synchronous, which is easier to read and maintain.
// //When we mark a function as async, it automatically returns a promise. Inside it, we use await to pause execution until the promise resolves."

// async function fetchData() {
//   try {b 
//     let data = await new Promise(resolve => 
//       setTimeout(() => resolve("Data received"), 1000)
//     );
//    // console.log(data);
//   } catch (error) {
//     //console.log(error);
//   }
// }

// fetchData();



// //     07   call(one-by-one) , apply([]) , bind(return new function )
// const person = {
//   name: "Raman"
// };

// function greet(greeting, punctuation) {
//   //console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// // call
// greet.call(person, "Hello", "!");   // Hello, Raman!

// // apply
// greet.apply(person, ["Hi", "!!"]);  // Hi, Raman!!

// // bind
// const greetPerson = greet.bind(person, "Hey");
// greetPerson("?");                    // Hey, Raman?



// // 08 this in JavaScript

// //"this refers to the object that is currently calling or owning the function. Its value depends on how the function is called, not where it is defined."

// //in regular function 
// function show() {
//   //console.log(this);
// }
// show(); // In browser: window, in strict mode: undefined


// //method as a object 
// const person1 = {
//   name: "Raman",
//   greet: function() {
//     //console.log(this.name);
//   }
// };
// person1.greet(); // Raman

// //arrow function 
// const person2 = {
//   name: "Raman",
//   greet: () => console.log(this.name)
// };
// person2.greet(); // undefined

// //truthy falsy
// if ("hello") {
//   //console.log("This runs because 'hello' is truthy");
// }

// if (null) {
//   //console.log("This won't run because 0 is falsy");
// }


// // Function Declaration
// function greet() {
//   return "Hello!";
// }

// console.log(greet()); // ✅ Works, even if called before definition


// // Function Expression
// const greets = function() {
//   return "Hello!";
// };

// console.log(greets()); // ✅ Works, but only after definition


//
console.log([] + []);
console.log([] + {});


for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//Reverse a string
// function reverse(str) {
// return str.split("").reverse().join("");

// }
// console.log(reverse("hello"));

function reverse(str){
  let reversed= ""

  for(let i=str.length; i>=0; i--){
    reversed += str[i]
  }
  return reversed
}
console.log(reverse("Raman"));


//Palindrome 
function palindrome(str){
  let left = 0;
  let right = str.length - 1;
  
  while(left < right){
    if(str[left] !== str[right]){
      return "not palindrome "
    }
    left++;
    right--;
  }
  return "it is a palindrome"
}
console.log(palindrome("level"));

//maximum number 
const macNum = Math.max(...[1,2,3,4,5,6,7])
console.log(macNum);

//remove duppicate 




