//Proxy
const data = {
  name : 'raman',
  age : 23,
  working : 'developer'
}

const r1data = new Proxy(data , {

  get(target , prop) {
      if (prop in target) {
        return Reflect.get(target, prop )
      }
      return false;
  },
  set(target , prop , value){
        if (!(prop in  target)) {
          throw new Error(`${prop} value is not present`)
        }
        switch (prop)  {
            case 'name' :
              case 'working' : 
              if(typeof value !== 'string'){
                throw new Error(`${prop} must be string`)
              }
              break;
              case 'age' :
                if(typeof value !== 'number'){
                throw new Error(`${prop} must be number`)
              }
              if (value < 0) {
                throw new Error(`${prop} must be grater than 0`)
              }
              break;
        }
        // target[prop]  = value;
        Reflect.set(target, prop , value)
        return true;
  }
})

r1data.age = -10;
r1data.name = '-10';
console.log(r1data);
console.log(r1data.name);
console.log(r1data.working);
console.log(r1data.age);


//Reflect


