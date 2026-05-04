// asy

// function hello(){
//   setTimeout(() => {
//     console.log("hello")
//   }, 2000)
//   console.log("raman");

// }

// hello()


//  callback
// function sum(a,b){
//   console.log(a + b);
  
// }

// function sumcallback(a , b ,callback){
//   callback(a,b)
// }

// sumcallback(1,2,sum)


// callback hell
// function getdata(dataid , getnextdata) {
//   setTimeout(() => {
//     console.log("data" , dataid);
//     if (getnextdata) {
//       getnextdata()
//     }
//   }, 2000)
// }

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//     getdata(4 )
//   })
//   } )
// }) 


//to solve callback hell we use promises 
// promise have three state --> pending , fulfilled , reject

// function getdata(dataid, getnextdata) {
//   return new Promise((resolve , reject) => {
//     setTimeout(() => {
//     console.log("data" , dataid);
//     console.log("resolve");
//     if (getnextdata) {
//       getnextdata()
//     }
//   }, 2000)
//   })
// }

// getdata(123)

// const getpromisedata = () => {
//   return new Promise((resolve , reject) => {
//     console.log("hey");
//     // resolve("success")
//     reject("error")

//   })
// }

// let Promises = getpromisedata();
// Promises.then(() => {
//   console.log("got success ");

// })

// Promises.catch(() => {
//   console.log("skdjbjbf");

// })


//promise chaining 
// function data1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello");
//       resolve("success")
//     }, 2000)
//   })
// }

// function data2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello");
//       resolve("success")
//     }, 2000)
//   })
// }


// data1().then((res) => {
//   console.log("fetching data 1");
//   console.log(res);
//   data2().then((res) => {
//       console.log("fetching data 2");
//       console.log(res);

//   })
// })


//call and apply
// function getname(city1, city2) {
//   console.log(this.fname + " " + this.lname + "lives in " + city1, city2);

// }

// let person = {
//   fname: "Raman",
//   lname: "Kumar"
// }

// let cities = ["Delhi", "Mumbai"]

// getname.apply(person, cities)


//
// let arr = [1,2,4,5]

// //run on every function 
// arr.forEach((item , index) => {
//     console.log(item , index);
    
// })

// //create new array
// let doubled = arr.map((item) => {
//   return item * 2
// })

// console.log(doubled);

// //select based on condition
// let getGreateritem = arr.filter((item , index) => {
//     return item > 2
// })

// console.log(getGreateritem);

// //combine every value the return it .
// let sum = arr.reduce((acc , curr) => {
//   return acc + curr
// })

// console.log(sum);


//                          fuction
// function data() {
//   console.log("raman");
  
// }

// data()

// const ram = function() {
//   console.log("raman");
  
// }
// ram()


//                                  Array
// let name = ["raman" , "aman"]

// name.push("mango")
// name.unshift("mango")
// name.splice(2,0,"banana")
// console.log(name);


//                          this 
// let user = {
//   name : "aman",
//   greet : function() {
//     console.log("Hello" , this.name);
    
//   },
//   greetchild : function(){
//     console.log(this.name);
    
//   }
// }

// user.greet()
// user.greetchild()


//                        hosting 
// var a;
// console.log(a);
// a =10;

// sayHello();//it works

// function sayHello() {
//   console.log("Hello");
// }


//                            anonymous function
// setTimeout(function() {
//   console.log("kay hall");
  
// },2000)


//                              Promises x
// let name = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 1000)
// })

// name.then((value) => console.log(value))
// .catch((error) => console.log(error))


//                                    closure 
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count
//   }
// }

// const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


//                          Event loop , Call stack , Queses

// console.log("Hello From Raman");
// setTimeout(() => {
//   console.log("A");
// }, 0)

// setTimeout(() => {
//   console.log("B");
// }, 0)

// setTimeout(() => {
//   console.log("C");
// }, 2000)
// console.log("End of Story");
// console.log("End of Story2");

//same but using promises --> at that situation promises will execute first because it is in micro tack queue and the priority of this queue is high then task queue that is why it run first , then setimeout will run 
// console.log("Hello");
// setTimeout(() => {
//   console.log("B");
// }, 0)

// Promise.resolve().then(() => {
//   console.log("C")
// })
// Promise.resolve().then(() => {
//   console.log("F");
// })
// Promise.resolve().then(() => {
//   console.log("Fuck");
// })
// console.log("End");
