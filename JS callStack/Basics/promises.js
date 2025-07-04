function savetodb (data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 5) {
      resolve("Data saved successfully: ");
    }else {
      reject("Weak connection, data not saved");
    }
  });
}


// console.log(savetodb("Apna Mann"));

// Using the promise for the output
let data =  savetodb ("knowledge is power");
//result is a promise object
  data.then((result) =>{
    console.log("result : ", result);
    console.log("promise resolved");
    return savetodb("Hello Jii!");
    
  })

  .then((result) => {
    console.log("result : ", result);
    console.log("promise2 resolved");
    return savetodb("Hello Jii!");
  })

  .then ((result) => {
    console.log("result : ", result);
    console.log("promise3 resolved");
    return savetodb("Hello Jii!");
    
  })
//error is thorughing the error configuration 
  .catch((error) => {
    console.log("error : ", error);
    console.log("promise rejected");
    
    
  });

  console.log(data);
  