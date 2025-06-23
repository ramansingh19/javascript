//que

let id = setInterval (() => {
  console.log(`hey! what's up`);
 
}, 2000)

setTimeout (() => {
  clearInterval(id)
}, 20000)

//que 
let square = n => {
  return n*n;
}
console.log(square(2));


