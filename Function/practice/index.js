//find even odd number
      function isoddeven(number) {
        number = 3;
        if (number % 2 ==0) {
        return 'Even number'
      }else{
        return'Odd number'
      }
      }
      console.log(isoddeven());

    //jo v comment kiya hain  wo mera method hai 
    function islarger(num1,num2) {
      //// num1 = 30;
      //// num2 = 40;
      // if (num1 > num2 ) {
        
      //   return num1;
      // }else {
        
      //   return num2;
      // }
      return num1 > num2 ? num1 : num2;
    }
    console.log(islarger(7,8));
    console.log(islarger(70,8));
    console.log(islarger(7,83));
    console.log(islarger(755,8444));
    console.log(islarger(7333344,83322));
    
      
      

      //
    
        function celsiusToFahrenheit(celsius) {
         return (celsius * 9/5) + 32;
          }

      // Example usage:
          // let celsiusTemp = 5;
          // let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
          console.log((`Your temperature is : ${celsiusToFahrenheit(39)}`));
          

          // que 1
          let a;
          function Poem() {
            return ` 
            'POEM' 
            Twinkle twinkle little star how are under what you are`
          }
          
          console.log(Poem());

          //que 2
          function dice() {
            let number = Math.floor(Math.random() * 6) + 1;
            let rand = number
            if (rand == 1) {
              return `Dice number is 1`
            }else if (rand == 2) {
              return `Dice number is 2`
            }else if (rand == 3) {
              return `Dice number is 3`
            }else if (rand == 4) {
              return `Dice number is 4`
            }else if (rand == 5) {
              return `Dice number is 5`
            }else if (rand == 6) {
              return `Dice number is 6`
            }
          }
          console.log(dice());
          
          