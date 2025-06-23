// Qs1. Write a JavaScript function that returns array elements larger than a number

let arr = [1,2,3,4,5,6,7,8,9,10];
let count = 4;

function largernumber(arr,count) {
  for(let i=0; i<arr.length; i++){
    if (count < arr[i]) {
      console.log(arr[i]);
      
    }
  }
}
largernumber(arr,count)


//Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueNumber(str) {
  let ans = "";
  for(let i=0; i<str.length; i++){
    let num = str[i];
    if (ans.indexOf(num) == -1) {
      ans = ans + num;

    }
  }
  return ans;
}
console.log(uniqueNumber(str));


//another version


function getUniqueCharacters(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ans.indexOf(ch) === -1) {
      ans += ch;
    }
  }
  return ans;
}
console.log(getUniqueCharacters("abcdabcdefgggh"));  // Output: "abcdefgh"
console.log(getUniqueCharacters("aA bB 123 321"));   // Output: "aA bB123"
console.log(getUniqueCharacters("Hello World!!"));   // Output: "Helo Wrd!"


//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function largerCount(country) {
  let idx = 0;
  for(let i=0; i<country.length; i++){
  let anslen = country[idx].length;
  let currlen = country[i].length;
  if (currlen > anslen) {
    idx = i;
  }
  }
  return country[idx]
}

console.log(`largest string in arr is : ${largerCount(country)}`);

// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.

let string = "Raman Singh";

function vowels(string) {
  let count = 0;
  for(let i=0; i<string.length; i++){
    if(
      string.charAt(i) == 'a'  ||
      string.charAt(i) == 'i'  ||
      string.charAt(i) == 'o'  ||
      string.charAt(i) == 'u'  ||
      string.charAt(i) == 'e' ){
      count++;
    }
  
  }
  return  count;
}
console.log(vowels(string));




//Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

let num = 100;
let num1 = 200;

function randomNumber() {
  let a = num1 - num;
  return Math.floor(Math.random() * a) + num;
  
}
console.log(randomNumber());








