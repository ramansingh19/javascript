//imp --> global object = window object hai


let user = {
  username : "RAman",
  id : "raman_01",

  Website : function() {
      console.log(`${this.username} , welcome to the website`);
      // console.log(this);//--> this will show current context
      
  }
}

// // user.Website();
// user.username = "Niki";
// user.Website()

// console.log(this);


//pratice
let code = () => {
  let obj1 = {
    name : "tywd",
    id : "bdw",
    seat : "wewed",

  }
  return obj1;
}
// console.log(code());


//Arroe function
let details = () => {
  let obj = {
    username: "Raman",
    id: "raman",
    own: "car"
  };

  let ide = () => {
    return {
      user: "Aman",
      id: "aman_01"
    }
    
  };

  obj.inner = ide();
  // console.log(ide().user);
     // store result of inner function
  return obj;
}

// console.log(details().username);

// let add = (num1 , num2) => (num1 + num2)

let add = (num1 , num2) => ({username : "raman"})
// console.log(add(1,19));


//(imp) =  implicit --> no return statement ,,,, explicilitly --> required return statement

// ----------------immediately invoked function Expression (IIFE)------------------------------------

//Standalone expression
;(function chai(){
  console.log("DB connected ");
  
})();

( () => {
  console.log("Db connected two");
  
})();


( (name) => {
  console.log(`Aman singh -->  ${name}`);
  
})('raman Singh')

