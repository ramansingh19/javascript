const url = "http://universities.hipolabs.com/search?country="

let btn = document.querySelector("button")
btn.addEventListener("click", async() => {
  let country = document.querySelector("input").value;
  console.log(country);
  let colleages = await getcountry(country);
  show(colleages);
  
})

function show(colleages) {
  let ul = document.querySelector(".ul")

  for(col of colleages){
  console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    ul.appendChild(li);
  }
}


async function getcountry(country) {
  try {
    let res = await axios.get(url + country);
    return  res.data
    
  } catch (e) {
    console.log("error", e);
    return [];
  }
}

// getcountry().then((data) => {
//   console.log("Universities:", data);
// });




    // // ✅ Make sure these are defined
    // const url = "http://universities.hipolabs.com/search?country=";
    // const country = "India";

    // // ✅ Async function to fetch data
    // async function getcountry() {
    //   try {
    //     let res = await axios.get(url + country);
    //     console.log("API response:", res.data);  // show response
    //     return res.data;
    //   } catch (e) {
    //     console.error("Axios error:", e);
    //     return [];
    //   }
    // }

    // // ✅ Call the function
    // getcountry().then(data => {
    //   console.log("Received university list:", data);
    // });