function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function() {
  console.log('woof woof');
};

function Shiba(name) {
  Dog.call(this, name);
}

let d = new Dog('Filo');

Shiba.prototype = Object.create(Dog.prototype);

let s = new Shiba('Joji');
console.log(s.name);

// Since this will add  the property to the chain this will be called
// before woof woof
// s.speak = function() {
//   console.log('wow');
// };

s.speak();
