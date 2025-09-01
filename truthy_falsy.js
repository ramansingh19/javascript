// // // There are only 7 falsy values:

// // // false

// // // 0 (the number zero)

// // // -0 (negative zero)

// // // 0n (BigInt zero)

// // // "" (empty string)

// // // null

// // // undefined

// // // NaN

// // if (0) console.log("true");   // ❌ not printed
// // if ("") console.log("true");  // ❌ not printed
// // if (null) console.log("true");// ❌ not printed

// // // 👉 These are the only values that behave as false in a Boolean context.


// // // Everything else is truthy.

// // // Some common truthy values:

// // // true

// // // Any non-zero number (1, -1, 3.14, etc.)

// // // Any non-empty string ("hello", "0", "false", " ")

// // // Any object ({}, [], function() {})

// // // Any BigInt that’s not 0n

// // // Dates (new Date())

// // // Symbols (Symbol("id"))

// // // Example:

// // if ("0") console.log("true");   // ✅ printed
// // if ("false") console.log("true"); // ✅ printed
// // if ([]) console.log("true");    // ✅ printed
// // if ({}) console.log("true");    // ✅ printed

// let emptyarray = {}

// if(Object.keys(emptyarray).length === 0) {
//   console.log("empty array");
  
// // }

// // false == 0 --> true
// // false == ' ' --> true
// // 0 == ' ' --> true

// //null coalescing ??
// let val ;
// val = null ?? 10;
// val = undefined ?? 20
// val = 0 ?? 30
// console.log(val);

// terniary operator ?
// condition ? true : false
let age = 10;

let canVote = (age >= 18) ? "Yes, you can vote" : "No, you are too young";
console.log(canVote);
