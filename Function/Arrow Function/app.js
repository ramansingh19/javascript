// function info() {
// console.log(this);

// }
// console.log(info());

// using this function 
let infodeatils = {
  name : 'Raman',
  age : 20,
  eng : 90,
  social : 85,
  getavg() {
    
    //this function is used to connect the function blocks
    let avg = (this.age + this.eng + this.social ) / 2;
    console.log(avg);
    console.log(`${this.name} got a mark ${avg}`);
    
    
  }
}
console.log(infodeatils.getavg());

//using try and catch mathod
try {
console.log(a);

} catch (err){
  
    console.log('laure');
  console.log('sun');
    console.log('caught the error');
    console.log(err);
    console.log('le');
    console.log('meri');
    console.log('baat');
    
    
}

//using arrow function 

//single line statement
let sum = (a,b) => (a+b)
console.log(sum(2,3));


let pow = (a,b) => {
  return a ** b;
}
console.log(pow(2,4));

let mult = (n) => {
  return n*n*n;
}
console.log(mult(4));

let avg = (a,b) => {
  return (a+b) /2;
}
console.log(avg(50,50));

//setTimeout function

console.log(this);


  setTimeout  ( () => {
  console.log('laure');
  
}, 2000);//2000 == 2s
console.log(setTimeout);
console.log('kya haal hai');

//setInterval

//  setInterval  ( () => {
//   console.log('laure');
  
// }, 2000);

//this with arrow fun
let student = {
  name : 'mohit',
  achev : 'nothing',
  getinfo : function () {
    console.log(this);
    return this.name
    
  },
  // getachev : () => {  //this will not work bcz. of lexical dcope
  //   console.log(this);
  //   return this.achev
    
  // }
  getinfo1 : (() => {
  console.log(this);
  
  })
}

console.log(student.getinfo());
