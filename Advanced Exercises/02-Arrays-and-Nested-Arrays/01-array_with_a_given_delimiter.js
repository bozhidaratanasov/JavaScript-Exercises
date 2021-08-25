function printArrayWithAGivenDelimiter(arr){
  const delimiter = arr.pop();
  return arr.join(delimiter);
}

console.log(printArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
))