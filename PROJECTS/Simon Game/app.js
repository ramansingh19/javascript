let gameSeq = [];
let user = [];

let level = 0;
let started = false;

let btns = ["red", "pink", "blue", "viloet"]

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
  if(started == false){
      console.log("Game has been started");
      started = true;

      levelUp();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  user = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3) + 1;
  let randcolor = btns[randIdx];
  let randBtn = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor);
  console.log(gameSeq);
  
  gameflash(randBtn);
}

function checkAns(idx) {
  // console.log(`Current lebel : ${level}`);
  

  if(gameSeq[idx] === user[idx]) {
    if (user.length == gameSeq.length) {
      setTimeout(levelUp ,1000);
    }
  }else {
    h2.innerHTML = `game over! Your score is <b>${level}</b> <br>Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
  
  
}

function btnPress() {
  let btn = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  user.push(userColor);

  checkAns(user.length-1);
  
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  level = 0;
  user = [];
}