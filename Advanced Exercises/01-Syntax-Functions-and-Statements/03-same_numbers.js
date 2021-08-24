function sameNumbers(number) {
  let hasSameDigits = true;
  let totalSum = 0;
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    totalSum += Number(number[i]);
    if (number[0] !== number[i])
      hasSameDigits = false;
  }
  console.log(hasSameDigits);
  console.log(totalSum);
}

sameNumbers(2222222);
sameNumbers(1234);
