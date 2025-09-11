
// class user {
//   constructor(username , email , password){
//     this.username = username;
//     this.email = email;
//     this.password = password
//   }
//     getpass(){
//       return `${this.password}abc`
    
//   }

//   changeusername() {
//     return `${this.username.toUpperCase()}`
//   }

//   changeuseremail() {
//     return `${this.email.toUpperCase()}`
//   }
// }

// const info = new user('raman', 'example@gamil.com', '123')
// console.log(info.getpass());
// console.log(info.changeusername());
// console.log(info.changeuseremail());

//

function user(username , email , password) {
    this.username = username;
    this.email = email;
    this.password = password
  }
  
  user.prototype.usernames = function(){
    return `${this.username.toUpperCase()}`
  }

  user.prototype.emails = function(){
    return `${this.email.toUpperCase()}`
  }

const tea = new user('raman', 'example@gamil.com', '123')
// console.log(tea.getpass());
console.log(tea.usernames());
console.log(tea.emails());
