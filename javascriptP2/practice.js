// practice 01 based on string 

// let names = ["january", "july", "march", "auguest"];
// console.log(names);
// names.shift();
// names.shift();
// names.unshift("june","july");
// // names.unshift("june");


// //practice 02 based on the array 
// let months = ["january", "july", "march", "Auguest"];
// months.splice(0,1)
// months.splice(1,0,"june");

// console.log(months);

// ['january']
// months
// (3)['july', 'march', 'Auguest']
// months.splice(1,0,"june");
// // // []

// //using reverse and find the june in which index
let months1 = ["january", "july", "march", "Auguest"];
let final1 = months1.reverse().indexOf("july");
console.log(final1);

//create the tic tak game
let game = [["X",null, "0"], [null,"X",null], ["0",null,"X"]];
console.log(game);




//Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

let  a = [3,4,5,67,7,8,9,10,11,12,13];
let n =5;
let ans = a.slice(0 , n)
console.log(ans);


//. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number]

let a1 = [2,3,4,5,5,6,7,7];
let n1 = 5;
let final = a1.slice(a.length-n1);
console.log(final);


// Write a JavaScript program to check whether a string is blank or not
let b =prompt("type your name");
if(b.length == 3){
    console.log("string is empty");
    
}else{
    console.log("string is not empty");
    
}


// // . Write a JavaScript program to test whether the character at the given (character)
// // index is lower case.


let char = ("Apna student ;")
let idx = 5;
if(char[idx]== char[idx].toLowerCase()){
    console.log("character is lower case");
    
}else{
    console.log("character is not lower case");
    
}

// //Write a JavaScript program to strip leading and trailing spaces from a string
let str = prompt("Enter your name");
console.log(`original string = ${str}`);
console.log(`original without space = ${str.trim() } `);

//. Write a JavaScript program to check if an element exists in an array or not
let arr = [2,3,4,5,6,7,7,8,4];
let item = 20;

if(arr.indexOf(item) != -1){
    console.log("element is present in array");
    
}else{
    console.log("element is not present in array");
    
}