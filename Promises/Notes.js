// // //1st method
// // const data = new Promise(function (resolve , reject) {

// //   setTimeout(function () {
// //     // console.log('task 1 completed');
// //     resolve();
// //   },1000)
  
  
// // }).then(function () {
// //   // console.log('async completed');
  
// // })
// // //2nd method
// // new Promise(function (resolve , reject) {

// //   setTimeout(function () {
// //     // console.log('task 1 completed');
// //     resolve();
// //   },1000)
  
  
// // }).then(function () {
// //   // console.log('async completed');
  
// // })

// // //3rd method 
// // const  newData = new Promise((resolve ,reject) => {
// //     setTimeout(function () {
// //       // console.log({username : 'Raman Singh', email : 'ramanexample@gmail.com'});
      
// //     },1000)
// // })

// // newData.then(function(user) {
// //   // console.log(user);
  
// // })


// // //callback hell
// // const details = new Promise(function (resolve , reject) {
// //   setTimeout(function () {
// //       let error = false ;
// //       if (!error) {
// //         resolve({username : 'Aman Kumar ', email : 'mikkukrexample@gmail.com' })
// //       }else{
// //         reject('ERROR : Something went wrong ')
// //       }
// //   },1000)
// // })

// // details.then((user) => {
// //   console.log(user);
// //   return user.username
// // }).then(function (username) {
// //   console.log(username);

// // }).catch(function (error) {
// //   console.log(error);
  
// // })

// // //async or await 

// // const datas = new Promise((resolve , reject) => {
// //       setTimeout( () => {
// //         let error = true;
// //         if(!error){
// //           console.log({username : 'Saurav Raj' , email : 'saurav@gmail.com' });
// //           console.log(error);
          
// //         }else{
// //           reject('EROOR : JS went wrong')
          
// //         }
// //       },1000)
// // })

// // async function consumeData() {
// // try {
// //     const response = await datas
// //   console.log(response);
// // } catch (error) {
// //   console.log(error);
  
// // }
  
// // }

// // consumeData();

// // //checking APIS
// // async function getAllUsers() {
// //   try {
// //       const link = await fetch('https://jsonplaceholder.typicode.com/users')
// //       const data = await link.json()
// //       console.log(data);
// //   } catch (error) {
// //     console.log('ERROR');
    
// //   }
  
// // }

// // getAllUsers();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//     console.log(data);
    
// })
// .catch((error) => {
//   console.log("ERROR" + error);
  
// })

//
fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
  return response.json()
})
.then(function (data) {
  console.log(data);
  
})
.catch(function(error) {
  console.log("error" + error);
  
})