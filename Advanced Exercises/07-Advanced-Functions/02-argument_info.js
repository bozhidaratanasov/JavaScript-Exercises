function argumentInfo (...args) {
  let arguments = [];
  let typeCount = {};
  for (const arg of args) {
    arguments.push({type: typeof arg, value: arg});
    if (!typeCount[typeof arg])
      typeCount[typeof arg] = 0;

    typeCount[typeof arg] += 1;
  }

  for (const arg of arguments) {
    console.log(`${arg.type}: ${arg.value}`);
  }

  Object.keys(typeCount)
      .sort((a, b) => typeCount[b] - typeCount[a])
      .forEach(type => console.log(`${type} = ${typeCount[type]}`));
}

argumentInfo('cat', 42, 69, function () { console.log('Hello world!'); });