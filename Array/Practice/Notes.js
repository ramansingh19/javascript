// // // const arr = [0,1,2,3,4,5,6,7,8];

// // // // arr.push(9);
// // // // console.log(arr);

// // // // arr.pop();
// // // // console.log(arr);

// // // // arr.length;
// // // // console.log(arr);


// // // // console.log(arr.indexOf(0));
// // // // console.log(arr.join());//String

// // // console.log(arr.slice(1,3));
// // // console.log(arr);

// // // console.log(arr.splice(1,3));
// // // console.log(arr);

// // // ---------------------------part 2 ------------------------------------------

// // const marvel_heros = ["Iron-man", "Thor", "Spiderman"];
// // const dc_heros = ["batman", "superman", "flash"];

// // // marvel_heros.push(dc_heros);
// // // console.log(marvel_heros);

// // //concat method
// // const all_heros = marvel_heros.concat(dc_heros);
// // console.log(all_heros);

// // //Spread method
// // const all__heros = [...marvel_heros , ...dc_heros];
// // console.log(all__heros);


// //using flat 
// let array = [1,2,3,[4,5,6,6],42,[4,3,3,3,3],[433,33,33,[2,4,5,3]]];
// let all_array = array.flat(Infinity);
// console.log(all_array);

// //using form
let name = "raman";
// console.log(Array.isArray(name));
console.log(Array.from(name));
// //value return nhi krega 
// console.log(Array.from({name : "raman"}));
// //value return krega
// console.log(Array.of({name : "raman"}));

//.isArray
let value = ["raman"]
console.log(Array.isArray(value));


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2 , score3));
