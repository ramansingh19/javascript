// // let url = "https://icanhazdadjoke.com/slack"

// // //using await and asynnc
// // async function getdata() {
// //   try {
// //     let res = await fetch (url)
// //     let data = await res.json();
// //     console.log(data.attachments[0].fallback);

// //     let res2 = await fetch (url)
// //     let data2 = await res2.json();
// //     console.log(data2.attachments[0].fallback);

// //   }catch (e){
// //     console.log("error", e);

// //   };
// // }
// // console.log(getdata());

// // // fetch(url)
// // // // console.log(fetch(url));

// // // .then ((res) => {
// // //   return res.json();
// // //   })
// // //   .then((data) => {
// // //     console.log(data.attachments[0]);
// // //     return fetch(url)
// // //   })
// // //   .then((res) => {
// // //     return res.json();
// // //   })
// // //   .then((data2) => {
// // //     console.log(data2.attachments[0]);

// // //   })
// // //   .catch ((err) => {
// // //   console.log("Error" + err);

// // // })

// let url = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//   console.log("btn clicked");
//   getapisresult();
// })

// async function getapisresult() {
//   try {
//     let api = await fetch(url);
//     let data = await api.json();
//     console.log(data.message);
//   } catch (e) {
//     console.log("error", e);
//   }
// }
// // console.log(getapisresult());

let url = " https://world.openfoodfacts.org/api/v0/product/737628064502.json"

async function getresult() {
  try {
    let res = await fetch(url);
  let data = await res.json();
  console.log(data.product);
  }catch (e){
      console.log("Error", e);
  }
}
console.log(getresult());



