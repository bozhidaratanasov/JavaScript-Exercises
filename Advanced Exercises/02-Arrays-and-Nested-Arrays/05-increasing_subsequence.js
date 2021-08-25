function extractIncreasingSubsequence(arr) {
  const result = [arr[0]];
  for (const number of arr) {
    if (number > result[result.length - 1])
      result.push(number);
  }
  result.forEach(element => console.log(element));
}

extractIncreasingSubsequence([1, 
  3, 
  8, 
  4, 
  10, 
  12, 
  3, 
  2, 
  24]
  );