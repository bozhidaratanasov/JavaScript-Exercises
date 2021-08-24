function cookingByNumbers(...operations) {
  let number = operations[0];
  for (let i = 1; i < operations.length; i++) {
    if (operations[i] == 'chop')
      number /= 2;
    else if (operations[i] == 'dice')
      number = Math.sqrt(number);
    else if (operations[i] == 'spice')
      number += 1;
    else if (operations[i] == 'bake')
      number *= 3;
    else if (operations[i] == 'fillet')
      number -= 0.2 * number;
    
    console.log(number);
  }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
