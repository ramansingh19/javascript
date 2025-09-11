class user {
  constructor(username){
    this.username = username;
  }

  logme() {
    console.log(`username is ${this.username}`);
    
  }
}

class Data extends user{
  constructor(username, email, password){
    super(username)
    this.email = email;
    this.password = password;

  }
  info(){
    console.log(`information about the user ${this.username}`);
    
  }

  getmore(){
    console.log(`email is this ${this.email}`);
    
  }
}

let chai = new Data('raman', 'exapmle@gamil.com', '123')
chai.info()
chai.getmore()
chai.logme()



// const masalachai = new user('masalachai')
// masalachai.logme();


// const coffee = new Data('coffee')
// coffee.info();

// console.log(user === Data);
// console.log(Data === user);
// console.log(chai instanceof user);
// console.log(chai instanceof Data);



