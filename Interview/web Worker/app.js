let btn1 = document.getElementById('btn1');
btn1.addEventListener('click' , () => {
  const webworker = new Worker("worker.js")
  webworker.postMessage("start worker")
  webworker.onmessage = function (e) {
    document.querySelector("#output").innerHTML = e.data
  }
  
})

let btn2 = document.querySelector("#btn2")
btn2.addEventListener('click', () => {
  document.querySelector("#hi").innerHTML = "Hi"
})