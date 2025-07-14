
// // // let user = { name: "Raman", age: 21 };
// // // let json = JSON.stringify(user);
// // // console.log(json);

// // // let n = 90;
// // // console.log(JSON.stringify(n));
// // // setTimeout(() => {
// // //   console.log(JSON.parse(n));
// // // },1000);

// // fetch('https://api.example.com/data')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data); // Update the page with data
// //   });

// //using http code & status
// fetch('/api/user')
//   .then(response => {
//     if (!response.ok) {
//       // Throw error if status is not 2xx
//       throw new Error(`Error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("Data:", data); // Successful data
//   })
//   .catch(error => {
//     // Handle different errors
//     if (error.message.includes("404")) {
//       alert("User not found!");
//     } else if (error.message.includes("500")) {
//       alert("Server error. Please try again later.");
//     } else {
//       alert("Something went wrong!");
//     }
//   });


//   //chatgpt ex to decitacte the wheather 




