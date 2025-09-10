
// //new & 

// // function multipleBy5(num){

// //     return num*5
// // }

// // multipleBy5.power = 2

// // // console.log(multipleBy5(5));
// // // console.log(multipleBy5.power);
// // // console.log(multipleBy5.prototype);

// // function createUser(username , price) {
// //   this.username = username
// //   this.price = price
// // }

// // createUser.prototype.increment = function() {
// //   this.price++;
// // }

// // createUser.prototype.printMe = function() {
// //   console.log(`price is ${this.price}`);
  
// // }

// // const chai = new createUser("chai" , 25)
// // const tea = new createUser("Tea", 250)
  
// // chai.printMe()
// // tea.printMe()


// // // Since increment and printMe are arrow functions, their this does not refer to the instance chai or tea.

// // // Instead, their this refers to the global context (window in browsers, or {} in strict mode), which likely does not have a price property → so this.price is undefined.
// // // function createUser(username , price) {
// // //   this.username = username
// // //   this.price = price
// // // }

// // // createUser.prototype.increment = () => { 
// // //   this.price++;
// // // }

// // // createUser.prototype.printMe = ()  => {
// // //   console.log(`price is ${this.price}`);
  
// // // }

// // // const chai = new createUser("chai" , 25)
// // // const tea = createUser("Tea"+ 250)
  
// // // chai.printMe()


// // /*

// // Here's what happens behind the scenes when the new keyword is used:

// // A new object is created: The new keyword initiates the creation of a new JavaScript object.

// // A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// // The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// // The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// // */



// // //portotype


// let array = ['Raman', 'Aman'];

// let heros = {
//   ironman : 'Tony stark',
//   thor : 'hammer',

//       getspider : function(){
//           console.log(`spider is super cool ${this.thor}`);
          
//       }
// }

// Object.prototype.raman = function() {
//   console.log(`raman is present in all objects`);
  
// }

// Array.prototype.aman = function() {
//   console.log(`aman is present in the array list`);
  
// }

// // array.aman();
// array.raman();
// heros.raman();
// // heros.aman();


//inheritance
let user = 'raman              '

String.prototype.username = function() {
  const trimmed = this.trim()
  console.log(`username : ${trimmed} , length of username is : ${trimmed.length}`);
  
  
}

user.username();