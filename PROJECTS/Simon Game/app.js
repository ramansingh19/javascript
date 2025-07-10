let gameSeq = [];
let user = [];

let level = 0;
let started = false;

let btns = ["red", "pink", "blue", "viloet"]

let h2 = document.querySelector("h2");

let speed = 1000 - level * 50;

let highScore = localStorage.getItem("highScore") || 0;

document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

let difficulty = "easy";
document.getElementById("difficulty").addEventListener("change", function() {
  difficulty = this.value;
  if (difficulty === "hard") {
    strictMode = true;
    speed = 300;
  } else {
    strictMode = false;
    speed = 700;
  }
});

let soundOn = true;
document.getElementById("soundToggle").addEventListener("change", function() {
  soundOn = this.checked;
});

function playSound(color) {
  if (!soundOn) return;
  let audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

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
  }, Math.max(100, 300 - level * 10));//flash faster when level will be upgrade 
}

function levelUp() {
  user = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * btns.length);
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
    h2.innerHTML = `Game Over! Your score: <b>${level}</b> <br>High Score: <b>${highScore}</b> <br>Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
  if (level > highScore) {
  highScore = level;
  localStorage.setItem("highScore", highScore);
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

