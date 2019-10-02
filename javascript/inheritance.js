class Animal {
  constructor(name) {
    this.name = name;
    this.color = 'blue';
  }

  speak() {
    console.log('I am speaking');
  }
}

// let a = new Animal();
// a.speak();

class Dog extends Animal {
  //   constructor(name) {
  // super(name);
  //   }
  speak() {
    console.log(this.name + ' dog barks!');
  }
}

let b = new Dog('foo');

b.speak();
