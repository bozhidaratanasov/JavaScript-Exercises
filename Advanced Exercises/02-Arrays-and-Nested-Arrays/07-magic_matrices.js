function magicMatrix(matrix) {
  const sumRows = [];
  const sumCols = [];
  for (let i = 0; i < matrix.length; i++){
    sumRows.push(matrix[i].reduce((a, b) => a + b));
    for (let j = 0; j < matrix[i].length; j++) {
      sumCols[j] = (sumCols[j] || 0) + matrix[i][j];
    }
  }
    if (sumRows.join() === sumCols.join())
      return true;

    return false;
}

console.log(magicMatrix([[4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]]
 ));