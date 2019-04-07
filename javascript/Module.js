// Module/ Revealing Module Pattern
// Modules are independent & reusable pieces of code and they
// help minimize namespace pollution by using less global variables
// The basis of this pattern uses IIFEs
// It also allows for more "private" variables

const Person = (function() {
  let name = 'Bob';

  const greet = function() {
    return name;
  };

  return {
    greet
  };
})();

let name = Person.greet();
console.log(`Hi my name is ${name}`);
