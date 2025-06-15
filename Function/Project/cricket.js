
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
        return 'user won'
      }
        if (computerMove ==='bat'){
        return 'it is tie'
        }
        if (computerMove === 'Stump') {
        return 'computer won'
        }
    }
      else if (userMove === 'ball'){

        if (computerMove === 'ball'){
        return 'it is a tie';
      }
        if (computerMove ==='bat'){
        return'computer  Won';
        }
        if (computerMove === 'Stump') {
        return 'user Won';
        }

      }
        else if (userMove === 'Stump'){

          if (computerMove === 'ball'){
        return 'Computer Won';
      }
        if (computerMove ==='bat'){
        return 'User won';
        }
        if (computerMove === 'Stump') {
        return 'it is a tie';
        }

        }

    }

    function showResult(userMove,computerMove,result) {
      
        alert(`you are chosen ${userMove}. Computerchoice is ${computerMove} and : ${result}`)
    }