//---------------------------------------Interview Questions--------------------
//let
let x = 5;
//console.log(x);

if(true){
  let y = 20;
}
//console.log(y);


//closure --> real life ex
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
//console.log(account.deposit(5000));
//console.log(account.withdraw(5000));
//console.log(account.checkbalance());


//Event loop
// "The event loop allows JavaScript to look synchronous while actually handling asynchronous tasks in the background using the call stack, callback queue, and microtask queue."
//console.log("Start");

setTimeout(() => {
  //console.log("Inside Timeout");
}, 0);

//console.log("End");



// Synchronous
//console.log("Task 1");
//console.log("Task 2");

// // Asynchronous
// console.log("Start");
// setTimeout(() => console.log("Async Task"), 1000);
// console.log("End");


//Promises in JavaScript
//A promise is an object that represents the result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Instead of using callbacks, we handle the result with .then() for success and .catch() for errors."

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received"), 1000);
});

promise
  //.then(result => console.log(result))   // "Data received"
  //.catch(error => console.log(error));


//  async/await
//async/await is syntactic sugar on top of promises. It makes asynchronous code look synchronous, which is easier to read and maintain.
//When we mark a function as async, it automatically returns a promise. Inside it, we use await to pause execution until the promise resolves."

async function fetchData() {
  try {b 
    let data = await new Promise(resolve => 
      setTimeout(() => resolve("Data received"), 1000)
    );
   // console.log(data);
  } catch (error) {
    //console.log(error);
  }
}

fetchData();



//        call(one-by-one) , apply([]) , bind(return new function )
const person = {
  name: "Raman"
};

function greet(greeting, punctuation) {
  //console.log(`${greeting}, ${this.name}${punctuation}`);
}

// call
greet.call(person, "Hello", "!");   // Hello, Raman!

// apply
greet.apply(person, ["Hi", "!!"]);  // Hi, Raman!!

// bind
const greetPerson = greet.bind(person, "Hey");
greetPerson("?");                    // Hey, Raman?



//this in JavaScript

//"this refers to the object that is currently calling or owning the function. Its value depends on how the function is called, not where it is defined."

//in regular function 
function show() {
  console.log(this);
}
show(); // In browser: window, in strict mode: undefined


//method as a object 
const person1 = {
  name: "Raman",
  greet: function() {
    console.log(this.name);
  }
};
person1.greet(); // Raman

//arrow function 
const person2 = {
  name: "Raman",
  greet: () => console.log(this.name)
};
person2.greet(); // undefined


