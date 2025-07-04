// function hello() {
//   console.log("kya haal hai");
  
// }

// function stack () {
//   hello();
// }

// stack();

// //Visulizing the call stack
// function one() {
//   return 1;
// }

// function two() {
//   return one() + 1;
// }

// function three() {
//   let ans = two() + one(); 
//   console.log(ans);
  
// }
// three();

// //js is single threaded


// setTimeout(() => {
//   console.log("hello");
  
// }, 2000);

// setTimeout(() => {
//   console.log("world");
  
// }, 2000);

// console.log("phele ye hoga");

function changeColor(color, delay , nextColorChanghe) {
  setTimeout(() => {
    let h1 = document.querySelector("h1");
    h1.style.color = color;
    if(nextColorChanghe) nextColorChanghe();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("pink", 1000);
  });
});

// setTimeout(() => {
//   chnageColor("pink");
// }, 2000);

// setTimeout(() => {
//   chnageColor("red");
// }, 1000);

// setTimeout(() => {
//   chnageColor("blue");
// }, 3000);

//Promises

function saveToDb(data, success, failure) {
  let internet = Math.floor(Math.random() * 10) + 1;
  if(internet > 4) {
    success();
  }else{
    failure();
  }
}

saveToDb("Apna Mann", 
  () => {
  // console.log(" success1 : data saved successfully");
  console.log(" success1 : data saved successfully");
  saveToDb("Hello Jii!", () => {

    // console.log(" success2 : data saved successfully");
    console.log(" success2 : data saved successfully");
    saveToDb("Raman", () => {

      console.log(" success3 : data saved successfully");
    }, () => {
      console.log("failure3 : weak Connection. data not saved");
    }
  );
  }, () => {
    console.log("failure3 : weak Connection. data not saved");
  }
);
}, () => {
  console.log("failure3 : weak Connection. data not saved");
}
);