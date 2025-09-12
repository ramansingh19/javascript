//console.log('Before:', Object.getOwnPropertyDescriptor(Math, "PI"));



//console.log('After:', Object.getOwnPropertyDescriptor(Math, "PI"));

// Now you can iterate over Math properties and see PI

for (const key in Math) {
  console.log(`${key}: ${Math[key]}`);
}



const username = {
  candidate1 : 'Raman',
  candidate2 : 'Shubham',
  candidate3 : 'John',
  candidate4 : 'Joseph',
}

console.log(Object.getOwnPropertyDescriptor(username , 'candidate4'))

for (const [key , value] of Object.entries(username)) {
  console.log(`${key} ${value}`);
  
}


// const data = {
//   name : 'raman',
//   id : 'raman.com',
//   position : 'junior developer'
// }

// // console.log(data);
// // console.log(Object.getOwnPropertyDescriptor(data , 'name'));

// Object.defineProperty(data , 'name' , {
//   writable : true,
//   enumerable: true
// })

// console.log(Object.getOwnPropertyDescriptor(data , 'name'));

// for (const [key , value] of Object.entries(data)) {
//   if (typeof  value != 'function') {
//     console.log(`${key} ${value}`);
    
//   }
  
// }




//
const myMath = {};

Object.defineProperty(myMath, 'PI', {
  value: 3.14159,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(myMath.PI); // 3.14159

// Change the value (allowed)
myMath.PI = 100;
console.log(myMath.PI); // 100

// Redefine descriptor (allowed)
Object.defineProperty(myMath, 'PI', {
  writable: false
});

// Now trying to assign a new value does NOT change PI
myMath.PI = 200;
console.log(myMath.PI); // Still 100