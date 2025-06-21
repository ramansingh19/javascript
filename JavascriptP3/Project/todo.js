//building todo list 

let todo = [];

let req = prompt('What is your request');

while(true){

  if (req == 'quit') {
    console.log('you are quitting the game');
    break;
  }

   if (req == 'list') {
    for(let i = 0; i<todo.length; i++){
      console.log(i,todo[i]);
      
    }
      console.log('-----------');
    } else if (req == 'add') {
      let list = prompt('What do you want to add');
      todo.push(list);
      console.log('task added');
      
    }else if(req == 'delete'){
      let idx = prompt('please enter the task you want to delete');
      todo.splice(idx,1);
    } else {
      console.log('wrong request');
      
    }
    req = prompt('please enter your request')

  }



