// Basic decorator pattern in js

let Model = function(name) {
  this.name = name;

  this.greet = function() {
    console.log(`Hi my name is ${this.name}`);
  };
};

let DecoratedModel = function(user, talent) {
  this.user = user;
  this.name = user.name;
  this.talent = talent;

  this.greet = function() {
    console.log(`Hi my name is ${this.name} and I can ${this.talent}`);
  };
};

let model = new Model('Bob');
model.greet();

let decoratedModel = new DecoratedModel(model, 'sing');
decoratedModel.greet();
