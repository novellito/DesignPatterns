// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n) {
  if (n == 0) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

// console.log(sumTo(100));

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
