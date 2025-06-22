// // let object = {
// //   Company_name : 'Samsung',
// //   item_name : 's22',
// //   price : 40000,
// //   rating : {
// //     star : 4.9,
// //     purchase_record : 900,

// //   },
// //   displayResult () {
// //   console.log(`Your iPhone price will be : ₹${object.price}`);
// //   }

// // }
// // object.displayResult();
// // // console.log(object.displayResult);


// //myntra outlet 
 
// let myntra = {
//   Company_name : 'Crocodile',
//   item_name : 'Men Solid slim fit t-shirt',
//   Price : 799,
//   rating : {
//     Star : 3.5,
//     ratings : 27,
//     'delevery time' : 'same day',
//   }

// };
//   let copymyntra = myntra;
//     copymyntra.Price = 900;
//       console.log(myntra);
//       console.log(myntra.rating['delevery time']);
      

//       let obj = {
//         message : 'good-job',
//         status : 'complete',
//       }
    
//       console.log(obj);
//       let {message , status } = obj;
//       console.log(message);
//       console.log(status);


// let product1 = {
//   Company_name : 'Crocodile',
//   item_name : 'Men Solid slim fit t-shirt',
//   Price : 799,
//   rating : {
//     Star : 3.5,
//     ratings : 27,
//     'delevery time' : 'same day',
//   }

// };
// console.log(product1);



//       function isidenticalProduct (product1, product2 ) {
//         if (typeof product1 !== 'object' || typeof product2 !== 'object'){
          
// //           console.warn('you choose wrong parameter');
// //           return false;
          
// //         }

// //         if (product1 == product2) {
// //             return true
// //           }
// //           else if(product1.Company_name === product2.Company_name && 
// //             product1.item_name === product2.item_name && 
// //             product1.Price === product2.Price){
// //               return true
// //             }else{
// //               return false
// //             }
// //           }
            
// // let product2 = {
// //   Company_name : 'Crocodile',
// //   item_name : 'Men Solid slim fit t-shirt',
// //   Price : 999,
// // };

// // console.log(product2);

          
// // console.log(isidenticalProduct(product1, product2));
// // console.log(isidenticalProduct(product1, product1));
// // console.log(isidenticalProduct(product2, product2));
// // // console.log(isidenticalProduct(product2, product1));


// // let items = {
// //   username : 'ramansingh19' ,
// //   content : {
// //     post : 'nani pic',
// //     likes : 900,
// //     comment : 100, 
// //     dislikes : 90,

// //   },
// //   tags : {
// //     tag :[ 'mohit', 'shubham', 'shivam']
// //   }

// // }
// // console.log(items.content.post);

      
// // Array of objects
// let arr = [
//   {
//     name : 'ram',
//     age : 27,

//   },
//   {
//     name : 'sita',
//     age : 27,
//   },
//   {
//     name : 'lau & kush',
//     age : 27,
//   }
// ]
// console.log(arr[0].score = 90);
// console.log(arr[0]);

//using Math function to chouce number btw the inputs
// let num = Math.random();
// num = num * 10 + 1;
// num = Math.ceil(num)
// console.log(num);

//number 1 to 100
// let no = Math.random();
// no = no *100 +1;
// no = Math.floor(no)
// console.log(no);

// //
// let num = Math.random();
// num = num * 5 + 20;
// num = Math.ceil(num);
// console.log(num);

      

//Question 
let num = Math.floor(Math.random() * 6) + 1;
console.log(num);


//Que 2

let carlist = [ 
  {
    name : 'BMW',
    model : 'Q8',
    color : 'black',
  },
  {
    name : 'audi',
    model : 'A8',
    color : 'black',
  }
]
console.log(carlist[1].model);

//Que 3
let PersonName = [
  {
    name : 'Raman',
    Age : 21,
    city : 'Muzaffarpur',
  },
  {
    name : 'Aman',
    Age : 26,
    city : 'Muzaffarpur',
  }
]
console.log(PersonName[0].city = 'New Work');
console.log(PersonName[0].country = 'united state')
console.log(PersonName[0])
