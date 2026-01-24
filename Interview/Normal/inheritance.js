class Animal{
  constructor(name){
    this.name = name
  }

  speak() {
    console.log(`${this.name} is sounds good`);
    
  }

}

class Dog extends Animal{
  speak() {
    console.log(`${this.name} is good`);
    
  }
}

let dog = new Dog("jimmy")
dog.speak()


console.log("Hello World");
