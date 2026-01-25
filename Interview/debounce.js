function debounce(fn , delay){
      let timerID;

      return function(...args){
        clearTimeout(timerID);
        timerID = setTimeout(() => {
              fn(...args)
        } , delay)
      }
}

const search = (query) => {
    console.log(`Search for ${query}`);
    
}

const searchWithdebounce = debounce(search , 100);


// searchWithdebounce("ha")
// searchWithdebounce("har")
// searchWithdebounce("hard")




