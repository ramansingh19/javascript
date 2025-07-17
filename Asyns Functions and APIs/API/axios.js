let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  let fact = await getresult();
  console.log(fact); // Logs actual data
  let img = document.querySelector(".image");
  // ul.innerText = JSON.stringify(fact, null, 2); // pretty print JSON
  img.setAttribute("src", fact)
});

async function getresult() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("Error", e);
    return "No Fact found!";
  }
}
