// // function hello() {
// //   console.log("kya haal hai");
  
// // }

// // function stack () {
// //   hello();
// // }

// // stack();

// // //Visulizing the call stack
// // function one() {
// //   return 1;
// // }

// // function two() {
// //   return one() + 1;
// // }

// // function three() {
// //   let ans = two() + one(); 
// //   console.log(ans);
  
// // }
// // three();

// // //js is single threaded


// // setTimeout(() => {
// //   console.log("hello");
  
// // }, 2000);

// // setTimeout(() => {
// //   console.log("world");
  
// // }, 2000);

// // console.log("phele ye hoga");
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
    h1.style.color = color;
    return resolve(`Color changed to ${color} after ${delay} milliseconds`);
  }, delay);
  })
  
}

changeColor("red", 1000)
  .then((result) => {
    console.log(result);
    return changeColor("green", 1500);
  })
  .then((result) => {
    console.log(result);
    return changeColor("blue", 1000);
  })

  .then ((result) => {
    console.log(result);
    return changeColor("orange", 1000);
  })

  .then((result) => {
    console.log(result);
    return changeColor("yellow", 2000);
    
  })
  .then((result) => {
    console.log(result);
    return changeColor("pink", 1500);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// changeColor("pink", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("pink", 1000);
//   });
// });

// // setTimeout(() => {
// //   chnageColor("pink");
// // }, 2000);

// // setTimeout(() => {
// //   chnageColor("red");
// // }, 1000);

// // setTimeout(() => {
// //   chnageColor("blue");
// // }, 3000);

// //Promises

// function saveToDb(data, success, failure) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   if(internet > 4) {
//     success();
//   }else{
//     failure();
//   }
// }

// saveToDb("Apna Mann", 
//   () => {
//   // console.log(" success1 : data saved successfully");
//   console.log(" success1 : data saved successfully");
//   saveToDb("Hello Jii!", () => {

//     // console.log(" success2 : data saved successfully");
//     console.log(" success2 : data saved successfully");
//     saveToDb("Raman", () => {

//       console.log(" success3 : data saved successfully");
//     }, () => {
//       console.log("failure3 : weak Connection. data not saved");
//     }
//   );
//   }, () => {
//     console.log("failure3 : weak Connection. data not saved");
//   }
// );
// }, () => {
//   console.log("failure3 : weak Connection. data not saved");
// }
// );