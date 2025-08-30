
const myname = Symbol("aman");

//literals
let object = {
  name : "Raman",
  age : 24,
  "name" : "Aman",
  [myname] : "ram",
  course : "B.Tech",
  branch : "CSE",
  email : "raman.19kumar1@gmail.com",


}

console.log(object.name);
console.log(object["name"]);
// console.log(typeof object.myname);
console.log(typeof object[myname]);
console.log(typeof myname);

//
console.log(Object.getOwnPropertySymbols(object));





