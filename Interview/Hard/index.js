//reverse 
let arr = [1,2,3,4,5];
arr.map(() => {
  let start = 0; 
  let end = arr.length-1;

  while(start < end){
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;

    start++;
    end--;
  }
})

//console.log(arr);

//prime or not
function isPrime(num){
  if(num <= 1) return false
  if(num === 2) return true
  if(num % 2 === 0) return false

  for (let i = 0; i < Math.sqrt(num); i++) {
    if(num % 1 ==0 ) return false;
    
  }
  return true;

}
// console.log(isPrime(4));
// console.log(isPrime(2));
// console.log(isPrime(17));

function isPrimee(num) {
    if(num <= 1) return false;

    for (let i = 2; i <num; i++) {
      if(num % i === 0){
        return false;
      }
    }
    return true;
}
// console.log(isPrimee(7));
// console.log(isPrimee(2));

//largest or smallest

let arr4 = [1,2,3,4,5];

let largest = Number.MIN_SAFE_INTEGER;
let smallest = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <arr4.length; i++) {
  
  if (arr4[i] > largest) {
    largest = arr4[i];
  }
  if (arr4[i] < smallest) {
    smallest = arr4[i];
    
  }
  
}
// console.log(largest);
// console.log(smallest);

//count vowels in string

let name = "Raman"

let count = 0;
for (let i = 0; i < name.length; i++) {
  let ch = name[i].toLowerCase();
  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    count++;
  }
  
}

// console.log(count);

//Fabonacci series

let name1 = "lol";
let array = name1.split("");

let start = 0;
let end = array.length - 1;

let isPalindrome = true;

while (start < end) {
  if (array[start] !== array[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

if (isPalindrome) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

//another one 
let n = 10;
let a = 10;
let b = 11;

for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}








