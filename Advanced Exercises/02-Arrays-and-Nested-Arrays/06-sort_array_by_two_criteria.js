function sortArray(arr) {
  arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  arr.forEach(element => console.log(element));
}

sortArray(['test', 
'Deny', 
'omen', 
'Default']
);