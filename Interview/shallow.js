let a = {a : 1, b : { c : 2}};
let shalllow = {...a};
shalllow.b.c = 4;
console.log(shalllow);
console.log(a.b.c);


