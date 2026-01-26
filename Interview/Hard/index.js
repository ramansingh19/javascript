// // // // //reverse 
// // // // let arr = [1,2,3,4,5];
// // // // arr.map(() => {
// // // //   let start = 0; 
// // // //   let end = arr.length-1;

// // // //   while(start < end){
// // // //     let temp = arr[end];
// // // //     arr[end] = arr[start];
// // // //     arr[start] = temp;

// // // //     start++;
// // // //     end--;
// // // //   }
// // // // })

// // // // //console.log(arr);

// // // // //prime or not
// // // // function isPrime(num){
// // // //   if(num <= 1) return false
// // // //   if(num === 2) return true
// // // //   if(num % 2 === 0) return false

// // // //   for (let i = 0; i < Math.sqrt(num); i++) {
// // // //     if(num % 1 ==0 ) return false;
    
// // // //   }
// // // //   return true;

// // // // }
// // // // // console.log(isPrime(4));
// // // // // console.log(isPrime(2));
// // // // // console.log(isPrime(17));


// // // // function isPrimee(num) {
// // // //     if(num <= 1) return false;

// // // //     for (let i = 2; i <num; i++) {
// // // //       if(num % i === 0){
// // // //         return false;
// // // //       }
// // // //     }
// // // //     return true;
// // // // }
// // // // // console.log(isPrimee(7));
// // // // // console.log(isPrimee(2));

// // // // //largest or smallest

// // // // let arr4 = [1,2,3,4,5];

// // // // let largest = Number.MIN_SAFE_INTEGER;
// // // // let smallest = Number.MAX_SAFE_INTEGER;

// // // // for (let i = 0; i <arr4.length; i++) {

// // // //   if (arr4[i] > largest) {
// // // //     largest = arr4[i];
// // // //   }
// // // //   if (arr4[i] < smallest) {
// // // //     smallest = arr4[i];
    
// // // //   }
  
// // // // }
// // // // // console.log(largest);
// // // // // console.log(smallest);

// // // // //count vowels in string

// // // // let name = "Raman"

// // // // let count = 0;
// // // // for (let i = 0; i < name.length; i++) {
// // // //   let ch = name[i].toLowerCase();
// // // //   if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
// // // //     count++;
// // // //   }
  
// // // // }

// // // // // console.log(count);

// // // // //Fabonacci series

// // // // let name1 = "lol";
// // // // let array = name1.split("");

// // // // let start = 0;
// // // // let end = array.length - 1;

// // // // let isPalindrome = true;

// // // // while (start < end) {
// // // //   if (array[start] !== array[end]) {
// // // //     isPalindrome = false;
// // // //     break;
// // // //   }
// // // //   start++;
// // // //   end--;
// // // // }

// // // // if (isPalindrome) {
// // // //   //console.log("It is a palindrome");
// // // // } else {
// // // //  // console.log("It is not a palindrome");
// // // // }


// // // // //check even odd
// // // // let num = 21;

// // // // if (num % 2 ==0) {
// // // //   console.log("even");
  
// // // // }else{
// // // //   console.log("odd");
  
// // // // }

// // // // //Sum of digit 

// // // let digit = [3,2] 

// // // let sum = 0;
// // // for (let i = 0; i <digit.length; i++) {
// // //     sum += digit[i];

// // // }
// // // // console.log(sum);



// // // //remove duplicate
// // // let arr = [1,2,3,1,2];
// // // let result = []

// // // for(let i=0; i<arr.length; i++){
// // //     let isDuplicate = false;

// // //     for(let j=0; j<result.length; j++){
// // //         if(arr[i] === arr[j]){
// // //             isDuplicate = true;
// // //             break;
// // //         }
// // //     }
// // //     if (!isDuplicate) {
// // //         result.push(arr[i])
// // //     }
// // // }
// // // // console.log(result);


// // // //find how many times a character appears

// // // let str = "RamanKumar"
// // // let freq = {}

// // // for(let i=0; i<str.length; i++){
// // //     let ch = str[i];

// // //     if (freq[ch]) {
// // //         freq[ch]++;
// // //     }
// // //     else{
// // //         freq[ch] = 1;
// // //     }
// // // }
// // // // console.log(freq);

// // // //merge two array 
// // // let arr1 = [1,2,3]
// // // let arr2 = [5,6,7]
// // // let result1 = []

// // // for(let i=0; i<arr1.length; i++){
// // //     result1.push(arr1[i])
// // // }
// // // for(let j=0; j<arr2.length; j++){
// // //     result1.push(arr2[j])
// // // }
        
// // // console.log(result1);

// // //Sort an array 

// // // let arr = [1,4,5,7,4,3];

// // // for(let i=0; i<arr.length-1; i++){
// // //     for(let j=0; j<arr.length-i-1; j++){
// // //         if (arr[j] > arr[j+1]) {
// // //             let temp = arr[j];
// // //             arr[j] = arr[j+1];
// // //             arr[j+1] = temp;
// // //         }
// // //     }
// // // }
// // // console.log(arr);


// // //second largest 
// // // let arr = [1,2,3,4,5];
// // // let largest = -Infinity;
// // // let secondLargest = -Infinity;

// // // for(let i=0; i<arr.length; i++){
// // //     if (arr[i] > largest) {
// // //         secondLargest = largest;
// // //         largest = arr[i]
// // //     }else if (arr[i] > secondLargest && arr[i] !== largest) {
// // //         secondLargest = arr[i];
// // //     }
// // // }
// // // console.log(secondLargest);
// // // console.log(largest);


// // //palindrome
// // // let str = "lolol"
// // // let start = 0;
// // // let end = str.length-1;
// // // let result = false;

// // // while(start < end){
// // //   if (str[start] === str[end]) {
// // //     result = true;
// // //     break;
    
// // //   }
// // //   start++;
// // //   end--;
// // // }

// // // console.log(result ? 'isPalindrome' : 'Not palindrome')

// // //fabonacci series 
// // //01-> 1->2-> 3->5--> it means start or next ko add krke next value hona chaiye 

// // // let arr = [0,1,1,2,3,5,8];

// // // let fabnoacci = false;
// // // for(let i=0; i<arr.length-2; i++){
// // //     if (arr[i] && arr[i+1] === arr[i+2]) {
// // //       fabnoacci = true;
// // //       break;
// // //     }
  
// // // }

// // // console.log(fabnoacci? "this is fabanocci" : "no this is not");


// // ------------------------------------interview problems-----------------------------

// // Fabonacci Series..........................................
// // let number = 10;
// // let a = 0, b = 1;
// // for(let i = 0; i < number; i++){
// //   console.log(a)
// //   let temp = a + b;
// //   a = b;
// //   b = temp;
// // }


// var a = [10,11,12,13];
// function print(b,...a){
//   console.log(a);
// }
// print(8,9,10,11,12)


// let arr = [12,"raman" , 2,1,'e', "om" , 1];
// let number = [];
// let string = [];
// let char = [];
// arr.forEach((ele) => {
//   if(typeof ele === "number") number.push(ele);
//   else if(typeof ele === "string" && ele.length === 1) char.push(ele);
//   else string.push(ele)
// })

// // arr.forEach((ele) => {
// //     // if(typeof ele == "number") number.push(ele);
// //     // else if(typeof ele == "string") {
// //     //   if(ele.length > 1) string.push(ele)
// //     //   else char.push(ele);
// //     // }
// // })

// // console.log(number);
// // console.log(string);
// // console.log(char);



// let obj1 = {};
// let obj2 = {
//   name : "raman "
// }
// let obj3 = {
//   name : "aman"
// }
// obj1[obj2] = {
//   name : "saurav"
// }
// obj1[obj3] = {
//   name : "pawan"
// }
// obj2[obj3] = {
//   name : "shivam"
// }
// // console.log(obj2[obj2]);


// // let a = {};
// // let b = { key: "b" };
// // let c = { key: "c" };

// // a[b] = 123;
// // a[c] = 456;

// // console.log(a[b]);
// // Both b and c become:
// // "[object Object]"


// let obj = {};
// obj[[1,2]] = "Hello";
// obj[[3,4]] = "World";
// // console.log(obj);
// // [1,2].toString() → "1,2"


// // console.log("5" + 3);
// // console.log("5" - 3);
// console.log(3 - "5");

// // +  → string concat
// // -  → number conversion


// // console.log(typeof null);
// // console.log(typeof undefined);
// // console.log(null == undefined);
// // console.log(null === undefined);

// // all object is truthy in js
// if ([]) {
//   console.log("Hi");
  
// }


// let array = [1,2,3];
// array.length = 0;

// console.log(array);


//Delete vs Undefined
// let arr = [1,2,3];
// delete arr[1];
// console.log(arr);
// console.log(arr.length);
// delete removes value, not index.

// console.log(a);
// var a = 10;

//Let Hoisting Trap
// console.log(b);
// let b = 20;


//Function Overwriting
// function test(){
//   return 1;
// }
// function test(){
//   return 2;
// }
// console.log(test());

//setTimeout + var
// for(var i=0;i<3;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },1000);
// }
//single shared i 


//this Inside Arrow
// let obj = {
//   name: "JS",
//   show: () => {
//     console.log(this.name);
//   }
// };

//this Normal Function
// obj.show();
// let obj = {
//   name: "JS",
//   show: function () {
//     console.log(this.name);
//   }
// };

// obj.show();

//NaN Comparison
// console.log(NaN === NaN);

//Boolean of String
// console.log(Boolean("true"));
// console.log(Boolean("false"));

// Chained Comparison
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

//Object Mutation
// const user = { name: "A" };
// user.name = "B";
// console.log(user);

//Spread Reference
// let a = {x:1};
// let b = {...a};
// b.x = 2;

// console.log(a.x);
// console.log(b.x);
// console.log(b.a);


//Deep Copy Trap
// let a = {x:{y:1}};
// let b = {...a};
// b.x.y = 5;

// console.log(a.x.y);
//spread is shallow copy that is why , if it is deep copy it would not convert 

// let x = 5;
// console.log(x++ + ++x);


//Closure + Loop + IIFE
// for (var i = 0; i < 3; i++) {
//   (function () {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })();
// }


//Fix Above Without let
// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 0);
//   })(i);
// }


//Event Loop Order
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() =>  console.log("C"));
// console.log("D");

//24
// async function test(){
// console.log(1);
// await Promise.resolve();
// console.log(2);
// }
// console.log(3);
// test();
// console.log(4);

//25
// let obj={
// name:"JS",
// show:function(){
// return () => {
//   console.log(this.name);
// }
// }
// };
// obj.show().call({name : "raman"})


//26
// function A(){}
// A.prototype.x=10;
// let a1=new A();
// //this will create new object and a1 have still the value of x : 10
// A.prototype={x:20};
// let a2=new A();
// console.log(a1.x); 
// console.log(a2.x);
// Each object connects to the prototype at the time it is created.
// Changing A.prototype later does NOT update old objects.

//27
// function test(a,b){
// arguments[0]=10;
// console.log(a);

// }
// test(5,6);

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1,2,3));

//29
// let test=()=>{
// console.log(arguments);
// }
// test(1,2,3);

//or
// let arg=(...args)=>{
// console.log(args);
// }
// arg(1,2,3);

//demo
// function demo(){
//   console.log(arguments);
// }
// demo(2,3,44)


//30
function User(){
this.name="A";
return {name:"B"};
}
let u=new User();
console.log(u.name);