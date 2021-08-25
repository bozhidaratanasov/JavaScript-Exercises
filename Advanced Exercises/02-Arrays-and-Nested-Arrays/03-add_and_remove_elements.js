function addOrRemove(commands) {
  let initialNumber = 1;
  const result = [];
  for (const command of commands) {
    if (command === 'add'){
      result.push(initialNumber);
    }
    else if (command === 'remove') {
      result.pop();
    }
    initialNumber++;
  }
  if (result.length === 0)
    console.log('Empty');
  else 
    result.forEach(element => console.log(element));
  
}

addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);