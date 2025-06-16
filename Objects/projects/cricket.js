
//using object 
let score = {
      win : 0,
      lost : 0,
      tie : 0,
    }

//using function
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
      //using this object to show on console score.
      console.log(score);
      
      alert(`you are chosen ${userMove}. Computerchoice is ${computerMove} and : 
          
      ${result}
      
      win:${score.win} lost:${score.lost} tie:${score.tie}`)
    }