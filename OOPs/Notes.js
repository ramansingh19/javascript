
const user = () => ({
  username : 'Raman kumar',
  email : 'raman@gmail.com',

  getdetails : function() {
    console.log(this.email);
    
  }

})

const userdeatils = user();
console.log(userdeatils.username);
console.log(userdeatils.getdetails());


//constructor
function users(username , loginCount , IsLoggedIN){
  this.username = username;
  this.loginCount = loginCount;
  this.IsLoggedIN = IsLoggedIN;

  return this;

}

const info = new users('raman', 5, true)
console.log(info);



