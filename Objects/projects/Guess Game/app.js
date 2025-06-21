//guess game

let max = prompt('Enter your number')
let randomnumber = Math.floor(Math.random () * max + 1);

let guess = prompt('enter Your guess number')


while(true){
  if(guess == 'quit'){
    console.log('Your are quitting the game');
    break;
  }else if(guess == randomnumber){
    console.log(`Congraulations ! You won ,, Your random number is:`, randomnumber);
    break;
  }else if(guess < randomnumber){
    guess = prompt('hint : your guess is too small pick a large number');
    
  }else if (guess > randomnumber){
    guess = prompt('please pick smaller number');
    
  }

}

