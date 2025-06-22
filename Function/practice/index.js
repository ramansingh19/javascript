// //find even odd number
//       // function isoddeven(number) {
//       //   number = 3;
//       //   if (number % 2 ==0) {
//       //   return 'Even number'
//       // }else{
//       //   return'Odd number'
//       // }
//       // }
//       // console.log(isoddeven());

//     //jo v comment kiya hain  wo mera method hai 
//     function islarger(num1,num2) {
//       //// num1 = 30;
//       //// num2 = 40;
//       // if (num1 > num2 ) {
        
//       //   return num1;
//       // }else {
        
//       //   return num2;
//       // }
//       return num1 > num2 ? num1 : num2;
//     }
//     console.log(islarger(7,8));
//     console.log(islarger(70,8));
//     console.log(islarger(7,83));
//     console.log(islarger(755,8444));
//     console.log(islarger(7333344,83322));
    
      
      

//       //
    
//         function celsiusToFahrenheit(celsius) {
//          return (celsius * 9/5) + 32;
//           }

//       // Example usage:
//           // let celsiusTemp = 5;
//           // let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
//           console.log((`Your temperature is : ${celsiusToFahrenheit(39)}`));
          

//           // que 1
//           let a;
//           function Poem() {
//             return ` 
//             'POEM' 
//             Twinkle twinkle little star how are under what you are`
//           }
          
//           console.log(Poem());

//           //que 2
//           function dice() {
//             let number = Math.floor(Math.random() * 6) + 1;
//             let rand = number
//             if (rand == 1) {
//               return `Dice number is 1`
//             }else if (rand == 2) {
//               return `Dice number is 2`
//             }else if (rand == 3) {
// //               return `Dice number is 3`
// //             }else if (rand == 4) {
// //               return `Dice number is 4`
// //             }else if (rand == 5) {
// //               return `Dice number is 5`
// //             }else if (rand == 6) {
// //               return `Dice number is 6`
// //             }
// //           }
// //           console.log(dice());
          
          
// // Que 1 
// function Poem() {
//   console.log(`By Anne Carson
// BETWEEN US AND
// animals is a namelessness.
// We    flail    around
// generically      —
// camelopardalis    is   what
// the Romans came up with
// or  "giraffe" ( it looked to
// them  like a camel crossed
// with a leopard ) or get the
// category wrong — a musk
// Ox  isn't  an  ox at  all...`);
  
// }
// Poem();

// //Que 2
// function rollDice() {
//   let num = Math.floor(Math.random() * 6) +1;
//   console.log(num);
  
// }
// rollDice();

// //
// // function sum(num1 , num2) {
// //   console.log(` sum of two number is : ${num1 * num2}`);
// // }
// // sum(5,6);
// // sum(10,6);
// // sum(5,16);
// // sum(15,6);

// //que 
// function Averagenumber(num1,num2,num3) {
//   let avg = (num1+num2+num3) / 3;
//   console.log(avg);
  
// }
// Averagenumber(100,100,100);
// Averagenumber


// //que

// function multiplication(num) {
//   for(let i=num; i<=num*10; i+=num){
//     console.log(i);
    

// }
// }
// multiplication(2);

//que 
// function number(num) {
//   let sum = 0;
//   for(let i=1; i<=num; i++)
//   {
//     sum += i;
   
//   }
//    return sum;
// }
// console.log(number(4));

//que

let arr = ['raman', 'aman', 'mikku']
function concat(arr) {
  let result = "";
  for(let i=0; i<arr.length; i++){
    result = result + arr[i];
  }
  return result;
}
concat(arr);





