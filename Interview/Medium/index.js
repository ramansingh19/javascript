// //01
// // console.log("Value of the Age" , age);
// // var age = 20;
// // console.log("value of the age ",age);
// //ans --> 20

// //02 
// // age = 100;
// // //console.log("age ", age);
// // let age = 30;
// //error

// //03
// myfun();

// var myfun = function () {
//   console.log("first");
  
// }

//  myfun();

// function myfun() {
//   console.log('second');
  
// }
//  myfun();
//  //second , first , first 


//  //04
// //  var variable = 10;

// //  (() => {
// //   console.log(variable);

// //   variable = 20;
  
// //   console.log(variable);
  
  
// //  })();

// //  var variable = 30;

// // console.log(variable);

// //05
// // foo = 40;
// // console.log("foo", foo);

// // var foo = 100;
// // console.log("foo", foo);


// //06
// variable = 10;

// (() => {
//   foo = 100;
//   //console.log(variable);
//   var foo = 100;
//   variable = 20;
//   //console.log(variable);
  
  
// })();

// //onsole.log(foo);
// //console.log(variable);
// var variable = 30;


// // //07
// // for(var i=0; i<=10; i++){
// //   setTimeout(() => console.log(i) , 0);
// // }

// //08
// //var fullname = "piyush"

// // var obj = {
// //   fullname : "Hacked ",

// //   prop : {
// //     fullname : 'inside ',
// //     getfullname : function () {
// //       return this.fullname
// //     },
// //   },

// //   getfullname : function(){
// //     return this.fullname;
// //   },

// //   getfullnamev2 : () => this.fullname,

// //   getfullnamev3 : (function  () {
// //     return this.fullname
// //   })(),
// // };

// // console.log(obj.prop.getfullname);
// // console.log(obj.getfullname);
// // console.log(obj.getfullnamev2);
// // console.log(obj.getfullnamev3);

// //09
// // const piyush = {
// //   name : 'piyush garg',
// //   sayName : function() {
// //     //console.log(this.name);
    
// //   }
// // }

// // const john = {
// //   name : 'john garg',
// //   sayName : function() {
// //    // console.log(this.name);
    
// //   }
// // }

// // john.sayName.call(piyush);

// //10 

// // const piyush = {
// //   name : 'piyush garg',
// //   sayName : function() {
// //     console.log(this.name);
    
// //   }
// // }

// // setTimeout (() => piyush.sayName() , 3 * 1000);


// //11
// // const obj = {
// //   height : 30,
// // }
// // console.log(obj.height);
// // delete  obj.height
// // console.log(obj.height);

// // //12
// // const obj = Object.create({
// //   height : 30,
// // })
// // console.log(obj.height);
// // delete  obj.height
// // console.log(obj.height);

// //13 map function
// let data = [1,2,3,4,5,6];

// let data2 = data.map(data => data * 2)
// console.log(data);

// console.log(data2);

 //14 Event bubbling  and event capturing 
 //go see in the html file

 //15
//  what is higher -order function



// ----------------------------Array---------------------------------------------
//for each 
let name = ['java' , 'js' , 'python', 'ruby'];

const items = name.forEach((item) => {
    //console.log(item);
    // return item;
})

 //console.log(items);


//filter 
const num = [1,2,3,4,5,6,7,8,9];
const value = num.filter((item) => {
    if (item > 4 && item < 7) {
      ///console.log(item);
    return item;
    }
    
})

//console.log(value);


const users = [
  { name: "Ram", active: true },
  { name: "Shyam", active: false },
  { name: "Mohan", active: true }
];

const data = users.filter((user) => {
    if (user === name) {
      return user
      
    }
})

//console.log(data);

function Counter() {
let count = 0; // Private variable
this.increment = function() {
count++;
return count;
};
}
let counter = new Counter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); 


let a = [1,2];
let b = [1 , 1];
let c = [...a , ...b];
//console.log(c);

function sum(x,y,z) {
return x + y + z;
}

 let numbers = [1,2,3]
console.log(sum(...numbers));



