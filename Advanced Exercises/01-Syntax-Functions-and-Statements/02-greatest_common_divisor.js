function greatestCommonDivisor(number1, number2) {
  let gcd;
  for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i == 0 && number2 % i == 0)
      gcd = i;
  }
  return gcd;
}

console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));
