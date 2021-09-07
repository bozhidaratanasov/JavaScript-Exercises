function nextFibonacciNumber() {
  let currentNumber = 0;
  let nextNumber = 1;

  function fib() {
    let fibNum = currentNumber + nextNumber;
    currentNumber = nextNumber;
    nextNumber = fibNum;

    return currentNumber;
  }

  return fib;
}

let fib = nextFibonacciNumber();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());