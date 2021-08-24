function solve(coordinates) {
  function validityChecker(x1, y1, x2, y2) {
    if (Number.isInteger(Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2))) {
      return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    }
    return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
  }
  
  let x1, y1, x2, y2;
  [x1, y1, x2, y2] = coordinates;
  console.log(validityChecker(x1, y1, 0, 0));
  console.log(validityChecker(x2, y2, 0, 0));
  console.log(validityChecker(x1, y1, x2, y2));
  
}

solve([2, 1, 1, 1]);
