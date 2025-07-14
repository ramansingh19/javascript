h1 = document.querySelector("h1");

function getcolor(color, delay)  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let num = Math.floor(Math.random() * 5)+1;
      if (num > 3) {
        reject("promise throw error")
      }

      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve('color changed');
    }, delay)
  })
}

async function result() {
  try {
  await getcolor("red" , 1000);
  await getcolor("blue" , 1000);
  await getcolor("pink" , 1000);
  await getcolor("black" , 1000);

  } catch (err) {
    console.log(err);
  }

  let num = 5;
  console.log(num + 5);
  
}

console.log(result());

