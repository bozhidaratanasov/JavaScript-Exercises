let processOddNumbers = numbers => numbers
            .filter((x, i) => i % 2 !== 0)
            .map(x => x * 2)
            .reverse()
            .join(' ');

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));

function solve(numbers) {
  return numbers
      .filter((x, i) => i % 2 !== 0)
      .map(x => x * 2)
      .reverse()
      .join(' ');
}