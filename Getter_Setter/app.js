class userinnfo {
  constructor(username , email , password){
    this.username = username
    this.email = email
    this.password = password
  }

  get password(){
    return this._password.toUpperCase()
  }

  set password(value){
    return this._password = value
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    return this._email = value
  }

  get username(){
    return `${this._username}Aman`.toUpperCase()
  }

  set username(value){
    return this._username = value
  }
}


const value = new userinnfo('' , '@gamil' , 'ndffjrfif')
console.log(value.password);
console.log(value.email);
console.log(value.username);

