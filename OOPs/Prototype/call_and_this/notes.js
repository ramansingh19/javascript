function setdata(username) {
      this.username = username;
      console.log('called');
      
}

function getdata(username , email , position ) {
    setdata.call(this, username)

  this.email = email;
  this.position = position
}

let info = new getdata('raman', 'raman@gamil.com', 'junior developer')
console.log(info);
