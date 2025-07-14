// // async function greet() {
// //   throw '404 not found'
// //   return 'hello dosto!';
// // }
// // console.log(greet());

// // greet()
// // .then ((result) => {
// //   console.log("promises was resolved");
// //   console.log("result was :"+ result);
// // })
// // .catch((err) => {
// //   console.log("promises was throwing errors : "+ err);
  
// // })


// function asynccal() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve ('Done');
//     }, 2000)
//   })
// }

// function asyncall1() {
//   return new Promise((reject) => {
//     setTimeout(() => {
//       reject('error ')
//     },3000)

//   })
// }

// async function result() {
//   console.log('Calling ...');
//   let res = await asynccal();
//   console.log(res);
//   let res1 = await asyncall1();
//   console.log(res1);
  
// }

// result();


function getnumber(){
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      let num = Math.floor(Math.random() * 10 + 1);
      console.log(num);
      resolve();
      } , 1000)
  })
}

async function result () {
  await getnumber();
  await getnumber();
  await getnumber();
  await getnumber();

}

console.log(result());
