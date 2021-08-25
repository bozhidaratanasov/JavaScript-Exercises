//Variant 1
function printEveryNthElement(arr) {
  const step = Number(arr.pop());
  for (let i = 0; i < arr.length; i += step) {
    console.log(arr[i]);
  }
}

//Variant 2
function printEveryNthElement1(arr, step) {
  const result = [];
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result;
}

printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);