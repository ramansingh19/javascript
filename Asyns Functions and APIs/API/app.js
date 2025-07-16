let url = "https://icanhazdadjoke.com/slack"

//using await and asynnc
async function getdata() {
  try {
    let res = await fetch (url)
  let data = await res.json();
  console.log(data.attachments[0].fallback);
  
  }catch (e){
    console.log("error", e);
    
  };
}
console.log(getdata());




// fetch(url)
// // console.log(fetch(url));

// .then ((res) => {
//   return res.json();
//   })
//   .then((data) => {
//     console.log(data.attachments[0]);
//     return fetch(url)
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log(data2.attachments[0]);
    
//   })
//   .catch ((err) => {
//   console.log("Error" + err);
  
// })

