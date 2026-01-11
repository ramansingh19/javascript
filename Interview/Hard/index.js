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

console.log(arr);

//prime or not 
