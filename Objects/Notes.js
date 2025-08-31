// const { use } = require("react");



// const myname = Symbol("aman");

// //literals
// let object = {
//   name : "Raman",
//   age : 24,
//   "name" : "Aman",
//   [myname] : "ram",
//   course : "B.Tech",
//   branch : "CSE",
//   email : "raman.19kumar1@gmail.com",


// }

// console.log(object.name);
// console.log(object["name"]);
// // console.log(typeof object.myname);
// console.log(typeof object[myname]);
// console.log(typeof myname);

// //
// console.log(Object.getOwnPropertySymbols(object));



let user = {}

user.name = "Raman"
user.id = "ramansingh._.19"
user.pc = "victus"

// console.log(user);


let object1 = {1 : "Raman" , 2 : "Aman"}
let object2 = {3 : "Sunny" , 4 : "mono"}
let object3 = {...object1 , ...object2};

// console.log(object3);
console.log(user);
//this gives you array u can use loop on this 
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//this will to detect if the item is present or not?
console.log(user.hasOwnProperty('ide'));


//API ex
// like this --> randomuser api
[
  {},
  {},
  {},
]