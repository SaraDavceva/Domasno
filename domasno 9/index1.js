class Animal {
  constructor(type, age) {
    this.type = type;
    this.age = age;
  }

  print(){
    console.log(`${this.type}, ${this.age}years `)
  }
}

class Dog extends Animal {
  constructor(type, age, color) {
    super(type, age);
    this.color = color;
  }

  dogColor(){
    console.log(`I'm a ${this.type}, I'm ${this.age} years and my color is ${this.color}`)
  }

}

const animal = new Animal ("cat", 3)
const dog = new Dog("dog", 4, "white")

animal.print()
dog.dogColor()
