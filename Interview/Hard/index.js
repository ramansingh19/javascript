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
console.log(largest);
console.log(smallest);






