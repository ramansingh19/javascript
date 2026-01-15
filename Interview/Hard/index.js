// // //reverse 
// // let arr = [1,2,3,4,5];
// // arr.map(() => {
// //   let start = 0; 
// //   let end = arr.length-1;

// //   while(start < end){
// //     let temp = arr[end];
// //     arr[end] = arr[start];
// //     arr[start] = temp;

// //     start++;
// //     end--;
// //   }
// // })

// // //console.log(arr);

// // //prime or not
// // function isPrime(num){
// //   if(num <= 1) return false
// //   if(num === 2) return true
// //   if(num % 2 === 0) return false

// //   for (let i = 0; i < Math.sqrt(num); i++) {
// //     if(num % 1 ==0 ) return false;
    
// //   }
// //   return true;

// // }
// // // console.log(isPrime(4));
// // // console.log(isPrime(2));
// // // console.log(isPrime(17));


// // function isPrimee(num) {
// //     if(num <= 1) return false;

// //     for (let i = 2; i <num; i++) {
// //       if(num % i === 0){
// //         return false;
// //       }
// //     }
// //     return true;
// // }
// // // console.log(isPrimee(7));
// // // console.log(isPrimee(2));

// // //largest or smallest

// // let arr4 = [1,2,3,4,5];

// // let largest = Number.MIN_SAFE_INTEGER;
// // let smallest = Number.MAX_SAFE_INTEGER;

// // for (let i = 0; i <arr4.length; i++) {

// //   if (arr4[i] > largest) {
// //     largest = arr4[i];
// //   }
// //   if (arr4[i] < smallest) {
// //     smallest = arr4[i];
    
// //   }
  
// // }
// // // console.log(largest);
// // // console.log(smallest);

// // //count vowels in string

// // let name = "Raman"

// // let count = 0;
// // for (let i = 0; i < name.length; i++) {
// //   let ch = name[i].toLowerCase();
// //   if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
// //     count++;
// //   }
  
// // }

// // // console.log(count);

// // //Fabonacci series

// // let name1 = "lol";
// // let array = name1.split("");

// // let start = 0;
// // let end = array.length - 1;

// // let isPalindrome = true;

// // while (start < end) {
// //   if (array[start] !== array[end]) {
// //     isPalindrome = false;
// //     break;
// //   }
// //   start++;
// //   end--;
// // }

// // if (isPalindrome) {
// //   //console.log("It is a palindrome");
// // } else {
// //  // console.log("It is not a palindrome");
// // }


// // //check even odd
// // let num = 21;

// // if (num % 2 ==0) {
// //   console.log("even");
  
// // }else{
// //   console.log("odd");
  
// // }

// // //Sum of digit 

// let digit = [3,2] 

// let sum = 0;
// for (let i = 0; i <digit.length; i++) {
//     sum += digit[i];

// }
// // console.log(sum);



// //remove duplicate
// let arr = [1,2,3,1,2];
// let result = []

// for(let i=0; i<arr.length; i++){
//     let isDuplicate = false;

//     for(let j=0; j<result.length; j++){
//         if(arr[i] === arr[j]){
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         result.push(arr[i])
//     }
// }
// // console.log(result);


// //find how many times a character appears

// let str = "RamanKumar"
// let freq = {}

// for(let i=0; i<str.length; i++){
//     let ch = str[i];

//     if (freq[ch]) {
//         freq[ch]++;
//     }
//     else{
//         freq[ch] = 1;
//     }
// }
// // console.log(freq);

// //merge two array 
// let arr1 = [1,2,3]
// let arr2 = [5,6,7]
// let result1 = []

// for(let i=0; i<arr1.length; i++){
//     result1.push(arr1[i])
// }
// for(let j=0; j<arr2.length; j++){
//     result1.push(arr2[j])
// }
        
// console.log(result1);

//Sort an array 

// let arr = [1,4,5,7,4,3];

// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-i-1; j++){
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


//second largest 
// let arr = [1,2,3,4,5];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for(let i=0; i<arr.length; i++){
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i]
//     }else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);
// console.log(largest);


//palindrome
// let str = "lolol"
// let start = 0;
// let end = str.length-1;
// let result = false;

// while(start < end){
//   if (str[start] === str[end]) {
//     result = true;
//     break;
    
//   }
//   start++;
//   end--;
// }

// console.log(result ? 'isPalindrome' : 'Not palindrome')

//fabonacci series 
//01-> 1->2-> 3->5--> it means start or next ko add krke next value hona chaiye 

let arr = [0,1,1,2,3,5,8];

let fabnoacci = false;
for(let i=0; i<arr.length-2; i++){
    if (arr[i] && arr[i+1] === arr[i+2]) {
      fabnoacci = true;
      break;
    }
  
}

console.log(fabnoacci? "this is fabanocci" : "no this is not");










