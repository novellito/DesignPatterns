let sumThreeVals = (a, b, c) => a + b + c;
// console.log(sumThreeVals(1, 2, 3));

let curriedSumThreeVals = a => b => c => a + b + c;

// console.log(curriedSumThreeVals(1)(2)(3));

let curriedSumFirstVal = curriedSumThreeVals(1);
let curriedSumSecondVal = curriedSumFirstVal(2);
let curriedSumFinalVal = curriedSumSecondVal(3);

console.log(curriedSumFinalVal);

//Original - Notice how the first val is always the same
// const bookBy = (author, book) => {
//   console.log(`${author} wrote ${book}.`);
// };
// bookBy('J. K. Rowling', "Harry Potter and the Sorcerer's Stone");
// bookBy('J. K. Rowling', 'Harry Potter and the Chamber of Secrets');

// Better curried version
const bookBy = author => {
  return book => {
    console.log(`${author} wrote ${book}.`);
  };
};
const booksByRowling = bookBy('J. K. Rowling');
const booksByChristian = bookBy('christian T.');

booksByRowling("Harry Potter and the Sorcerer's Stone");
booksByChristian('fun fun functional programming');

// Currying seems like a good idea if you're reusing the same function over and over while using the same args

// another currying example

const curriedSubstring = start => length => str => str.substr(start, length);
const getSubstring = (start, length, str) =>
  curriedSubstring(start)(length)(str);
const getFirstCharacters = (length, str) => curriedSubstring(0)(length)(str);
const getFirstCharacter = str => curriedSubstring(0)(1)(str);

// example of functional composition
// Object oriented approach
const getUglyFirstCharacterAsLower = str => str.substr(0, 1).toLowerCase();

// Functional approach
const curriedSubstring = start => length => str => str.substr(start, length);
const curriedLowerCase = str => str.toLowerCase();
const getComposedFirstCharacterAsLower = str =>
  curriedLowerCase(curriedSubstring(0)(1)(str));
