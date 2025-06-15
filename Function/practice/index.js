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
          
          