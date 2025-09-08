const randomColor = () => {
  let Hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += Hex[Math.floor(Math.random() * 16 )]
    
  }
  return color;
  
}
let interval;
let startChangingColor = () => {
  if (!interval) {
    interval = setInterval(changecolor , 1000)
  }

  function changecolor() {
    document.body.style.background = randomColor()
  }
};

let stopChangingColor = () => {
  clearInterval(interval)
  interval = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)

// console.log(randomColor());
