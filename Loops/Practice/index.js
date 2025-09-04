
// // //que 1

// // let arr= [1,2,3,4,5,6,7,8,2,9];
// // let num = 3;
// // for(let i= 0; i<arr.length; i++){
// //     if (arr[i] === num) {
// //       arr.splice(i,1);
// //     }
// // }
// // console.log(arr);


// //que 2

// let num1 = 28715445342;
// let count = 0;

// for(let i=0; i =num1>0; count++){
//   num1 = Math.floor(num1/10)
// }
// console.log(count);

// //que 3


// let num3 = 2398;
// let count1 = 0;

// let copt = num3;
// for(let i = 0; i=copt>0; count1++){
//   digit = copt % 10;
//   count1 +=  digit
//   copt=Math.floor(copt/10)
// }
// console.log(count1);

//
for(let i = 0; i <= 10; i++){
  console.log(i);
}


// ------------------------while loop ------------------------------------

let a = 5 ;
while(a <= 20){
  if (a == 10) {
    console.log(`Found the value  : ${a}`);
    break;
  }
  console.log(`value of a : ${a}`);
  a++;
}

//do-while loop
let marks = 102;
do{
    console.log(marks);
    marks++;
}while (marks < 100) {
  

}

