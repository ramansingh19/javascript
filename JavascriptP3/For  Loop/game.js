// let favorite = "kill";
// let guess = prompt("Enter your guess");
// while ((guess!=favorite)&&(guess!="quit")) {
//     guess = prompt("try again");
    
// }
// if (guess == favorite) {
//     console.log("congrutations you guess the fav. movie ");
    
// }else{
//     console.log(" you quit the game");
    
// }

let movie = 'ravan';
let guess = prompt('what is your guess');

while((guess != movie) && (guess != "quit")){
    guess = prompt('wrong answer ! please try again');
    
if (guess == movie) {
    console.log('Congrutations ');
    
    
}else{
    console.log('quit');
    
}
}
