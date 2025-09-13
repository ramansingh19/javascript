// //this is Lexical
// function init() {
//   username = 'iron Man'
//   console.log(username);
//   // console.log(inneruser);
  
//   function outer() {
//     console.log(username);
//    // inneruser = 'Thor'
//   }
//   function inner() {
//     console.log(username);
    
//   }
//   inner()
//   outer()
// }
// init()

// function init() {
//     let name = "Mozilla"; 
//       function displayName() {
//       console.log(name); 
//       }
//       displayName();
//     }
//   init();


  //Closure

function makeFunc() {
      const name = "Mozilla";
      function displayName() {
      console.log(name);
    }
    return displayName;
}

const data = makeFunc();
data()