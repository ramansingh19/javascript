//Array  using foreach function 
let arr = [1,2,3,4,5]

function print(el) {
  console.log(el);
  
  
}
arr.forEach(print)

//Array using Objects 
let arr1 = [
  { 
    name : 'Raman',
    gender : 'Male',
    skill : 'java'
  }, 

  { 
    place : 'dfdf',
    name : 'dsff'
  } ,
]

arr1.forEach((student ) => {
  console.log(student.name);
  
} )

//Map function use for double the value 
let arr2 = [9,8,8,7,7];

let num = arr2.map( (el ) =>{
  return el*2;
  
  
})

//Filter function use to filter out the value according to the commands
let arr3 = [2,3,4,5,6,7,8,9,10]

let even = arr3.filter((number1) => {
  return number1 % 2 !=0;// even or odd
})
 

//Reduce function means phele dono value add hoga means 1+2=3, then agle value means 3+3 hoga aaise hi reduce value add hote chala jayega 

let arr4 = [1,2,3,4]

let reduce = arr4.reduce((res,el) => {
  return res - el;
})

console.log(reduce);

let arrr = [1,2,3,7,5,9];

let max = arrr.reduce((max,el) => {
  if (max > el){
    return max
  }else {
    return el
  }
})

//que
let num1 = [5,10,15,20,24,30,35]

let multiple = num1.every((el) => 
      el % 5 === 0
)

//que 
let arr5 = [3,5,6,7,8,5,3,6,65]

let min1 = arr5.reduce((min ,el) => {
  if(min < el){
    return min
  }else {
    return el
  }
})
console.log(min1);

function sum (a=2,b=2){
  return a+b;
}
console.log(sum(1,2));
console.log(sum(3,2));
console.log(sum(5));
console.log(sum(0));

