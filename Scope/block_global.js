//Block 7 global scope
let a = 300;

function num(){
  let a = 900
  console.log(`Inner : ${a}`);
  let b = 8000
  const d = 908
  e = 90000

}

console.log(a);
num();


//using inside the function
function one(){
  name = "Raman";
  function Two(){
    PC = "victus"
    console.log(name);
    // console.log(model);
    
  }
  function three(){
    model = "1998"
    console.log(model);
    
  }
  // console.log(PC);
  
  
   Two();
  three()
  
}
one()