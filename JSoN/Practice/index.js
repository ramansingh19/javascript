
//local storage help to set no in application.
let clicked = localStorage.getItem('clicked') || 0;

function pressed() {
clicked++;
//this will help to update in applicvation after every click
localStorage.setItem('clicked', clicked)
updateClick();

}
//use to update the value in the pressed function.
function updateClick() {
  let button = document.querySelector('.click');
  if (clicked % 2 === 0 ) {
button.classList.remove('js-odd');
button.classList.add('js-even');
  }else{
  button.classList.remove('js-even');
  button.classList.add('js-odd');

  }
  button.innerText = clicked;
console.log('pressed');
}

updateClick();


//this function is for displaying according to the time stamp.
function checkinghours(personname = 'Dear') {
  

  let time = new Date;
let hours = time.getHours();
//this is use to connect with button and change init
let button = document.querySelector('.button');
// console.log(hours);


//using this statement we can knew how much time we clicked our button in console.

let nooftimeclicked = 0;
  button = document.querySelector('.button');
  nooftimeclicked++;
  button.innerText = nooftimeclicked;


if (hours > 5 && hours < 12) {
  button.innerText = `Good morning ${personname}` 
  console.log('Good morning');

}else if (hours > 12 && hours < 18) {
  button.innerText = `Good Afternoon ${personname}`
  console.log('Good afternooon');
  
}
else if (hours > 18 && hours < 24) {
  button.innerText = `Good Night ${personname}`
  console.log('Good Night');
  
}
}

checkinghours();








// if (time == '4am to 11am') {
//   return 'good morning';
// }else if (time == '12am to 4pm') {
//   return 'good afternoon'
// }else {
//   return 'good evening'
  
// }

// }

// console.log.(JSON.parse(timestr));


