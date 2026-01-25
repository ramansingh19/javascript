let a = {a : 1, b : {c : 3}};
let deepcopy = JSON.parse(JSON.stringify(a))
deepcopy.b.c= 9;
console.log(deepcopy);
console.log(a.b.c);

