function rotateArray(arr) {
  const countOfRotations = Number(arr.pop());
  for (let i = 0; i < countOfRotations; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);