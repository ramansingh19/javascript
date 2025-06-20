//Que 1
// for (let i=5; i>=1; i--){
//   console.log(`Your decreasing number is ${i}`);
  
// }
//Quen2
// for (let a=1; a<=10; a++){
//   console.log(`Your incresing number is : ${a}`);
  
// }

//using this condition they check until they reach the if condition to be true 1005 v true hai to phrse check krenge usko pr print krenge 1006 aake break ho jayega

//Que 3
// for (let i=10; i>1; i++){
 
//   if(i > 1005){
//     console.log(i);
//     break;
    
 
//   }
  
// }



// //Que 4 print 1 to 15 odd number
// for(let i=15; i>=1; i--){
//   if (i % 2 != 0) {
//     console.log(`Odd number is : ${i}`);
//   }
// }


// for (let a=1; a<=15; a=a+2){
//   console.log(`Odd Number : ${a}`);
  
// }

// console.log('Even Number');


// //Que 5 print 1 to 15 even number 
// for (let e=1; e<=10; e++){
//   if (e % 2 ==0) {
//     console.log(`Even number is :${e}`);
    
//   }
// }

//que 5 Multiplication table
// for (let i=3; i<=30; i=i+3){
//   console.log(`Multiplication Table of 3 : ${i}`);

// }

// console.log('using if');


// for (let i=5; i<=50; i++){
//   if (i % 5 ==0) {
//     console.log(`Table of 5 ${i}`);
    
//   }
// }


// console.log('sdd');




// let n = prompt('what number you want of table');
// n = parseInt(n);
// for (let a=n; a<=n*10; a++){
//   if (a % n==0) {
//     console.log(a);
    
//   }
// }

//using nested loop
// for(let i=1; i<=3; i++){
//   console.log(`outer loop ${i}`);
  
//   for(let j=1; j<=5; j++){
//     console.log(`inner ${j}`);
    
//   }
// } 

// for (let a=1; a<=3; a++){
//   console.log(`outer loop ${a}`);
  
//   for(let z=5; z>=2; z--){
//     console.log(`ineer loop : ${z}`);
    
//   }
// }

// let a = prompt('what is your number')
// a= parseInt(a)
// for (let n = a; n<=a*10; n++){
//   if (n % a == 0 ) {
//     console.log(n);
    
//   }
// }

//using while loop 
// let i = prompt('what is number');
// i = parseInt(i)
// let a = i ;
// while(a<=i*10){
//   if (a % i ==0) {
//     console.log(a);
//   }
//   a++;
  
  
// }

//using looops with array
// let names= ['Raman', 'Aman', 'mikku', 'sunny', 'summy'];
// for(let i=names.length-1; i>=0; i--){
//   console.log(i,names[i]);

// }

//using nested loop using array
// let fruits = [['mango', 'apple', 'banana'], ['pompogrante','guava'],['nano','lolo']]
// for(let f=0; f<fruits.length; f++){
//   console.log(`list : ${f}`);
//   for(let j=0; j<fruits.length; j++){
//     console.log(`names : ${j,fruits[j]}`);
    
//   }
  
// }

//using nested loop 
let marks=[['aman',  90], ['ravi', 90], ['mohit', 99]];

for(let i=0; i<marks.length; i++){
  for(let q=0; q<marks[i].length; q++){
    console.log(marks[i] [q]);
    
  }
}