class user {
  constructor(username){
    this.username = username

  }

  logme(){
    console.log(`client name is : ${this.username}`);
    
  }

  static more(){
    return '123'
  }
}

const raman = new user("ramna")
raman.logme()
console.log(raman.more());

