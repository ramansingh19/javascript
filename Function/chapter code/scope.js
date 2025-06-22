//  let name = 'Raman';
//     function preety() {
//       console.log(`Your name is : ${name}`);
      
//     }
//     //use fuction invoking 
//     preety();
//     name = 'saurav';
//     preety();
//     name = 'ravi';
//     preety();

    // // using Return statement
    // // function value(){
    // //   let random = Math.random();
    // //   let getvalue = random;
    // //   return getvalue;
       
    // }
    // console.log(value());
    //  console.log(value());
    //   console.log(value());
    //    console.log(value());
    //     console.log(value());

    //     function laure() {
    //       let kutte = Math.random();
    //       let chutiye = kutte;
    //       return chutiye;

    //     }
    //      console.log(laure());

    // function Driveornot() {
    //   let age = 10;

    //   if (age == undefined) {
    //     return 'laure aagle saal aana'
    //   }
    //   console.log('checking age');
      
    //   if(age >= 18){
    //     return 'You can drive'
    //   }else{
    //     return 'You cannot drive'
    //   }
      
    // }
    // console.log(Driveornot());

    
    // let num = sum(4,5);
    // let num2 = sum(9,8);
    // console.log(`addition of these number is : ${num} and ${num2}`);
    
    // function sum(a,b) {
    //   let sum = a+b;
    //   return sum;
    
    // }

    // function multiple(a,b) {
    //   let multiple = a*b;
    //   return multiple;
    // }
    // let num1 = multiple(8,8);
    // console.log(`multiple of these number is: ${num1}`);
    

    //if u can't denfine any value in ur statement then the default value will we be placed ..
    // function gretting (name = 'pyaare') {
    // // name = 'Raman';
    // // name1 = 'Aman';
    //   console.log(`namaste ${name} uncle`);
      
    // }
    
    // gretting();
    
    //scope
function outer() {
  let a =10;
  let b =20;
    function inner() {
      let x = 10;
      console.log(a);
      console.log(b);
      console.log(x);
    }

    
    inner();
}
    outer()

    //Que 
    let greet = 'hello'; //Global scope

    function gretting() {
      let greet = 'namaste' //function scope
      console.log(greet);

        function innergreet() {
          // let greet = 'laure'
          console.log(greet); //lexical scope
          
        }
        innergreet();

    }
    console.log(greet);
    gretting();
    

    //higher order function 

    function multiplename(func ,count ) {
      for(let i=0; i<=count; i++){
      func();
      }
    }

    let name = function () {
      console.log('Raman Singh');
       
    }
    multiplename(name , 3)

    //using higher order function even odd


    function oddeven(request) {
      if(request == 'odd'){
        return function(n){
          console.log(n % 2 !=0);
          
        }
      }else if (request == 'even') {
        return function(n){
          console.log(n % 2==0);
          
        }
      }else{
        console.log('wrong attempt');
        
      }
      
    }

    
     
    
    
    
    