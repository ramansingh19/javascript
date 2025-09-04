// ----------------for-of-loop-------------------------
//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.



let arr = ["Raman", "Shubham", "Aman" , "Ravi"];

for (const name of arr) {
  //console.log(`Name  : ${name}`);
  
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];

for (const num of arr1) {
  // console.log(`Numbers  : ${num}`);
  
}


// --------------------------------------maps--------------------------------------------
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.


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
//The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:



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
//The forEach() method of Array instances executes a provided function once for each array element.


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
// myobjets.forEach((item) => {
//   if (item.branch) console.log("Branch:", item.branch);
//   if (item.course) console.log("Course:", item.course);
//   if (item.name) console.log("Name:", item.name);
// });


let arr2 = [1,2,3,4,5,6,7,8,9];

const values = arr2.forEach( (items) => {
      //console.log(items);
      return items;
      
}  )

// console.log(values);//foreach does not return the values


// -------------------------------------using filter method-------------------------------------------

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//(on the basis of true/false condition)


// let arr3 = [1,2,3,4,5,6,7,8,9];


let arr3 = ['js','java','python','ruby','c++'];

let value = arr3.filter( (items)  =>  {
    return items.length > 4;
    
  // if(items.length >= 4) {
  //   return items;
  // }
  
}  )


//we can also use foreach method
let newNum = []

arr3.filter( (nums)  => {
  if (nums.length >= 4 ) {
    newNum.push(nums);
  }
} )

// console.log(value);
// console.log(newNum);

//books 

let books = [
  {
    Title : 'first-Book' , genre : 'History' , publish : '1998' , edition : '2012'
  },
  {
    Title : 'Second-Book' , genre : 'Science' , publish : '1998' , edition : '2012'
  },
  {
    Title : 'Third-Book' , genre : 'Fiction' , publish : '1990' , edition : '2002'
  },
  {
    Title : 'Fourth-Book' , genre : 'History' , publish : '2001' , edition : '2015'
  },
  {
    Title : 'Fifth-Book' , genre : 'Non-Fiction' , publish : '1960' , edition : '2007'
  },
  {
    Title : 'six-Book' , genre : 'Science' , publish : '2003' , edition : '2015'
  },
  {
    Title : 'seven-Book' , genre : 'History' , publish : '1994' , edition : '2002'
  },
  {
    Title : 'eight-Book' , genre : 'Fiction' , publish : '1948' , edition : '2003'
  },
  {
    Title : 'Nine-Book' , genre : 'Non-Fiction' , publish : '1993' , edition : '2006'
  },
  {
    Title : 'Tenth-Book' , genre : 'Science' , publish : '2005' , edition : '2014'
  },


]

let userbook = books.filter( (bk)  => bk.publish >  '2000' )
userbook = books.filter( (bk)  => {
  return bk.genre === 'History' && bk.edition > '2005'
})
// console.log(userbook);



// -------------------------------------------chaining------------------------------------------------

let array = [1,2,3,4,5,6,7,8,9];

let result = array
.map( (num)  => num * 10 )
.map(  (num)  => num + 1 )
.filter(  (num)  => num >= '50' )

// .filter(  (num ) =>  num * 10)  --> this wil not work bcz filter work on true/false
// result.forEach((num) => console.log(num));


// --------------------------------------------Reduce--------------------------------------------------
let array1 =  [1,2,3];

// const intialValue = 0;
const sumofintial = array1.reduce(  (accumulator , currentValue)  =>   {
      // console.log(`acc : ${accumulator} and currval : ${currentValue}` );
      return accumulator + currentValue;
      
},5)
  
// console.log(sumofintial);


//shoopingcart
let items = [
  {
    item1 : 'bikaji bhujiya',
    price : 325
  },
  {
    item2 : 'safola oats',
    price : 699
  },
  {
    item3 : ' mango ',
    price : 100
  },
  {
    item4 : 'apple',
    price : 170
  },
  {
    item5 : 'ice-cream',
    price : 290
  },
  {
    item5 : 'watch',
    price : 2999
  },
  {
    item6 : 'ps5',
    price : 35999
  },
]

let total = items.reduce(  (acc , item)  =>  {
    console.log(`acc ; ${acc} , item : ${Object.values(item)[0]} , prices ; ${item.price}`);
    return acc + item.price
},0)

// items.forEach(item => {
//   console.log(Object.values(item)[0], item.price);
// });

console.log(total);

