 // let product = {
  //   name : 'Raman',
  //   lastname : 'Kumar',
  //   nickname : 'Chikku',
  //   rating : {
  //     student : 'Excellent '
  //   }

  // }
  // console.log(typeof product);
  
  // console.log(product);

  // let str = JSON.stringify(product);
  // console.log(typeof str);
  // console.log(str);
  
  // let str1 = JSON.parse(str);
  // console.log(typeof str1);
  // console.log(str1);
  


  //always save in web application
  // localStorage.setItem('name', 'Raman Kumar');
  // localStorage.setItem('gender', 'male');

  console.log(localStorage.getItem('name'));
  
  
  
  let product = {
    name : 'Raman',
    lastname : 'Kumar',
    nickname : 'Chikku',
    rating : {
      student : 'Excellent ',
    },
    name : 'Aman'
    
  }
  
    
  localStorage.setItem('product', JSON.stringify(product));
  console.log(localStorage.getItem('product'));

  let obj = JSON.parse(localStorage.getItem('product'))
  console.log(obj)
  
  
  // let object = JSON.parse(pro);

  // localStorage.setItem('object', object)
  // console.log(localStorage.getItem('object'));
  
  localStorage.removeItem('pro')
  