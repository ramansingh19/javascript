
//using this object method to generate the score

let scorestr = localStorage.getItem('score');
let score;
resetScore(scorestr);

function resetScore(scorestr) {
  score = scorestr ?   JSON.parse(scorestr) : {
      win : 0,
      lost : 0,
      tie : 0,
      };

score.displayresult = function() {
      return (`Score : Win:${score.win} lost:${score.lost} Tie:${score.tie}`)
};

//this for the purpose of reset button to score change into zero
showResult();
  
// document.querySelector('.reset').innerText = resetScore();

}

//using function to get value of 0 t0 3 random number
    function generatevalue() {
      let randomnumber = Math.random() * 3;
      
      if(randomnumber > 0 &&  randomnumber <= 1){
        return 'bat';
        // console.log('computer choose bat');
      }else if (randomnumber > 1 && randomnumber <= 2) {
        return 'ball';
        // console.log('computer choose ball');
      }else{
        return 'Stump'
        // console.log('computer choose stump');
        
      }

    }


    //using computerMove , userMove to get result by clicking the button and get result by using function that is easy to define the value
    function getresult(computerMove , userMove) {
    
      if (userMove === 'bat'){
        
      if (computerMove === 'ball'){
        score.win++;
        return 'user won'
      }
        if (computerMove ==='bat'){
          score.tie++;
        return 'it is tie'

        }
        if (computerMove === 'Stump') {
          score.lost++;
        return 'computer won'
        }
    }


      else if (userMove === 'ball'){

        if (computerMove === 'ball'){
        score.tie++;
        return 'it is a tie';
      }
        if (computerMove ==='bat'){
          score.lost++;
        return'computer  Won';
        }
        if (computerMove === 'Stump') {
          score.win++;
        return 'user Won';
        }

      }
        else if (userMove === 'Stump'){

          if (computerMove === 'ball'){
            score.lost++;
        return 'Computer Won';
      }
        if (computerMove ==='bat'){
          score.win++;
        return 'User won';
        }
        if (computerMove === 'Stump') {
          score.tie++;
        return 'it is a tie';
        }

        }
    
    
    }

    function showResult(userMove,computerMove,result) {

      localStorage.setItem('score', JSON.stringify(score))
      //using this object to show on console score.
      console.log(score);
// ? this symbol is use to agar yeh sahi nhi hai toh aap yeh use kre situation.
      document.querySelector('.user-input').innerText =
      userMove !== undefined ? `you are chosen ${userMove}` : ' ';

      document.querySelector('.computer-input').innerText = 
      computerMove !== undefined ? `you are chosen ${computerMove}` : '';

      document.querySelector('.result').innerText = 
      result !== undefined ? result : '';

      document.querySelector('.score').innerText = score.displayresult();

    }



    // console.log('string'.;
    