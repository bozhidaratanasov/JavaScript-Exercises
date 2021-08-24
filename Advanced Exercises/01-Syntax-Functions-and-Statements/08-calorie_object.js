function calorieObject(data) {
  calorieObj = {}
  for (let i = 0; i < data.length; i++){
    if (i % 2 == 0) {
      calorieObj[data[i]] = 0;
      continue;
    }
    calorieObj[data[i-1]] = Number(data[i]);
  }
  return calorieObj;
}

console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
