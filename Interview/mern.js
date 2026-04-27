//asy

// function hello(){
//   setTimeout(() => {
//     console.log("hello")
//   }, 2000)
//   console.log("raman");

// }

// hello()

//callback
// function sum(a,b){
//   console.log(a + b);

// }

// function sumcallback(a , b , sumcallback) {
//   sumcallback(a , b)

// }

// sumcallback(1, 2, sum)


// function getdata(dataid , getnextdata) {
//   setTimeout(() => {
//     console.log("data" , dataid);
//     if (getnextdata) {
//       getnextdata()
//     }
//   }, 2000)
// }

//callback hell
// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//     getdata(4 )
//   })
//   } )
// }) 


//to solve callback hell we use promises 
// promise have three state --> pending , fulfilled , reject

// function getdata(dataid, getnextdata) {
//   return new Promise((resolve , reject) => {
//     setTimeout(() => {
//     console.log("data" , dataid);
//     console.log("resolve");
//     if (getnextdata) {
//       getnextdata()
//     }
//   }, 2000)
//   })
// }

// getdata(123)

// const getpromisedata = () => {
//   return new Promise((resolve , reject) => {
//     console.log("hey");
//     // resolve("success")
//     reject("error")
    
//   })
// }

// let Promises = getpromisedata();
// Promises.then(() => {
//   console.log("got success ");
  
// })

// Promises.catch(() => {
//   console.log("skdjbjbf");
  
// })


//promise chaining 
function data1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hello");
      resolve("success")
    }, 2000)
  })
}

function data2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hello");
      resolve("success")
    }, 2000)
  })
}


data1().then((res) => {
  console.log("fetching data 1");
  console.log(res);
  data2().then((res) => {
      console.log("fetching data 2");
      console.log(res);
      
  })
})