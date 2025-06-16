 let user = {
      name : 'raman',
      age : 34
    }
    console.log(user);

    let product = {
      company_name : 'TATA',
      item_name : 'bra',
      prize : 300,
    }

    //using dot notation to access the value
    console.log(product.prize);
    console.log(product.company_name);
    console.log(typeof product);
    product.company_name = 'apple'
    console.log(product);
    
    //using bracket notation to access the value
    console.log(product['prize']);
    console.log(product['company_name']);

    //using deletion method to delete the any object property
    // delete(product.company_name);
    // console.log(product);
    
    
    
    
    