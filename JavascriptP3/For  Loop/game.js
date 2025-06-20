let favorite = "kill";
let guess = prompt("Enter your guess");
while ((guess!=favorite)&&(guess!="quit")) {
    guess = prompt("try again");
    
}
if (guess == favorite) {
    console.log("congrutations you guess the fav. movie ");
    
}else{
    console.log(" you quit the game");
    
}