// ----------------for-of-loop-------------------------

let arr = ["Raman", "Shubham", "Aman" , "Ravi"];

for (const name of arr) {
  //console.log(`Name  : ${name}`);
  
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr1) {
  // console.log(`Numbers  : ${num}`);
  
}


// --------------------------------------maps--------------------------------------------
const map = new Map();
map.set('name' , "Raman");
 map.set('new', "Aman");        //--> old version

// console.log(map);

for (const [key , value] of map) {
  // console.log(key, ':-', value);
  
}


// const map1 = new Map();
// map1.set('name', ["Raman", "Aman"]);

// console.log(map1);

// -----------------------------------------objects--------------------------------------
// ---------------------------------for-in-loop--------------------------------------------------
//this is not working , onject iteration is not like this 
// const games = {
//   'game1' : "BGMI",
//   'game2' : "ludo",
//   'game3' : "snake"
// }

// for (const key of games) {
//   // console.log(key);
  
// }


const object = {
  js : 'javascript',
  oak : 'Java',
  html : 'Hyber Text markup language'
}

for (const key in object) {
//  console.log(`${key} shortcut is :  ${object[key]}`);
  
  // if (Object.prototype.hasOwnProperty.call(object, key)) {
  //   const element = object[key];
    
  // }
}


// --------------------------------------for-each-loop---------------------------------------

let language = ['js','java','python','ruby','c++'];

// language.forEach( function (items)  {
//       console.log(items);
      
// }  )

language.forEach(  (items,index,arr) => {
      //console.log(items,index,arr);
      
}  )



let myobjets = [
  {
    name : "raman",
    course : "B.Tech"

  },
  {
    branch : 'CSE'
  },
  {

  }
]

//to avoid unndefined
myobjets.forEach((item) => {
  if (item.branch) console.log("Branch:", item.branch);
  if (item.course) console.log("Course:", item.course);
  if (item.name) console.log("Name:", item.name);
});
