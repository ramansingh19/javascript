//  let user = {
//       name : 'raman',
//       age : 34
//     }
//     console.log(user);

//     let product = {
//       company_name : 'TATA',
//       item_name : 'bra',
//       prize : 300,
//     }

//     //using dot notation to access the value
//     console.log(product.prize);
//     console.log(product.company_name);
//     console.log(typeof product);
//     product.company_name = 'apple'
//     console.log(product);
    
//     //using bracket notation to access the value
//     console.log(product['prize']);
//     console.log(product['company_name']);

//     //using deletion method to delete the any object property
//     // delete(product.company_name);
//     // console.log(product);
    


//using inside object method 
    let product1 = {
      'comapny-name' : 'Apple',
      items_name : 'iPhone 15',
      prize : 65000,
      rating : {
        star : 4.9,
        item_purchase : 20000,

      },
    displayprize : function () {
      console.log(`Your iPhone price will be : ₹${product1.prize}`);
      //we can use product1 or this method also to print the price
      
    }
    }
    product1.displayprize();
    // console.log(product1);


  //using Autoboxing method :- you can use many commands in inside the console
  console.log('This is me Raman kumar '.repeat(2).replace('Raman', 'Aman'));
  


  //object References
//b will not change ther value bcz. they not using the references
  let a = 4;
  let b = a;
  console.log(`a = ${a}, b = ${b}`);
  a = 7;
  console.log(`a = ${a}, b = ${b}`);



  //in this they are using references method 
  let x = {num1 : 5}
  let y = x;
  console.log(`x = ${x.num1}, y = ${y.num1}`);
  x.num1 = 9;
  console.log(`x = ${x.num1}, y = ${y.num1}`);



//object reference
  let n = 4;
  let c = 4;
  console.log(n === c);

  let n1 = {ap : 'aj'};
  let c1 = {ap : 'aj'};
  console.log(n1 == c1);
  
  
    
  let product = {
      'comapny-name' : 'Apple',
      items_name : 'iPhone 15',
      prize : 65000,
      rating : {
        star : 4.9,
        item_purchase : 20000,

      },
    displayprize() {
      console.log(`Your iPhone price will be : ₹${product.prize}`);
      //we can use product1 or this method also to print the price
      
    }
    }
    product.displayprize();
    
    
    
    