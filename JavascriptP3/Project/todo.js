//building Todo List 

let list = [];

let todo = prompt('choose what do you want')


while(true){

  if(todo == 'quit'){
    console.log('you are quitting the app');
    break;
    
  }else if (todo == 'list'){
    console.log('-------------');
    for(lists of list){
      console.log(lists);
      
    }
    console.log('-------------');
  }
  
  else if(todo == 'add'){
    
    let add = prompt('please add what you want to add ')
    list.push(add);
    console.log('task will be added');
    
  }
  todo = prompt('choose what do you want')

}

