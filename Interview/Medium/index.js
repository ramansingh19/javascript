//01
// console.log("Value of the Age" , age);
// var age = 20;
// console.log("value of the age ",age);
//ans --> 20

//02 
// age = 100;
// //console.log("age ", age);
// let age = 30;
//error

//03
myfun();

var myfun = function () {
  console.log("first");
  
}

 myfun();

function myfun() {
  console.log('second');
  
}
 myfun();
 //second , first , first 


 //04
//  var variable = 10;

//  (() => {
//   console.log(variable);

//   variable = 20;
  
//   console.log(variable);
  
  
//  })();

//  var variable = 30;

// console.log(variable);

//05
// foo = 40;
// console.log("foo", foo);

// var foo = 100;
// console.log("foo", foo);


//06
variable = 10;

(() => {
  foo = 100;
  //console.log(variable);
  var foo = 100;
  variable = 20;
  //console.log(variable);
  
  
})();

//onsole.log(foo);
//console.log(variable);
var variable = 30;


// //07
// for(var i=0; i<=10; i++){
//   setTimeout(() => console.log(i) , 0);
// }

//08
//var fullname = "piyush"

// var obj = {
//   fullname : "Hacked ",

//   prop : {
//     fullname : 'inside ',
//     getfullname : function () {
//       return this.fullname
//     },
//   },

//   getfullname : function(){
//     return this.fullname;
//   },

//   getfullnamev2 : () => this.fullname,

//   getfullnamev3 : (function  () {
//     return this.fullname
//   })(),
// };

// console.log(obj.prop.getfullname);
// console.log(obj.getfullname);
// console.log(obj.getfullnamev2);
// console.log(obj.getfullnamev3);

//09
// const piyush = {
//   name : 'piyush garg',
//   sayName : function() {
//     //console.log(this.name);
    
//   }
// }

// const john = {
//   name : 'john garg',
//   sayName : function() {
//    // console.log(this.name);
    
//   }
// }

// john.sayName.call(piyush);

//10 

const piyush = {
  name : 'piyush garg',
  sayName : function() {
    console.log(this.name);
    
  }
}

setTimeout (() => piyush.sayName() , 3 * 1000);


//11
// const obj = {
//   height : 30,
// }
// console.log(obj.height);
// delete  obj.height
// console.log(obj.height);

//12
const obj = Object.create({
  height : 30,
})
console.log(obj.height);
delete  obj.height
console.log(obj.height);