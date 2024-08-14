class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor - inherits properties from Animal
    this.breed = breed;
  }

  makeSound() {
    super.makeSound();//to inherit the parent class method
    console.log("Woof!"); //added child-specific method on top of the parent method
    // Overrides the parent method if super() is not used
  }

  fetch() {
    console.log(`${this.name} is fetching!`); // Child-specific method
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // Outputs: "Buddy"
myDog.makeSound(); //  Outputs: "Generic animal sound"  --then-> "Woof!"
myDog.fetch(); // Outputs: "Buddy is fetching!"