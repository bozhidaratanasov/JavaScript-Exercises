function solution() {
  let microelements = {
    'protein': 0,
    'carbohydrate': 0,
    'fat': 0,
    'flavour': 0
  }

  return function(input) {
    
    let recipes = {
      'apple': {
        'carbohydrate': 1,
        'flavour': 2
      },
      'lemonade': {
        'carbohydrate': 10,
        'flavour': 20
      },
      'burger': {
        'carbohydrate': 5,
        'fat': 7,
        'flavour': 3
      },
      'eggs': {
        'protein': 5,
        'fat': 1,
        'flavour': 1
      },
      'turkey': {
        'protein': 10,
        'carbohydrate': 10,
        'fat': 10,
        'flavour': 10
      }
    }

    if (input === 'report') {
      let result = [];
      for (const key in microelements) {
        result.push(`${key}=${microelements[key]}`);
      }

      return result.join(' ');
    }

    let data = input.split(' ');
    
    if (data[0] === 'restock') {
      let [command, microelement, quantity] = data;
      quantity = Number(quantity);
      microelements[microelement] += quantity;
      return 'Success';
    }

    else if (data[0] === 'prepare') {
      let [command, recipe, quantity] = data;
      quantity = Number(quantity);
      for (const key in recipes[recipe]) {
        if (recipes[recipe][key] * quantity > microelements[key])
          return `Error: not enough ${key} in stock`;
        microelements[key] -= recipes[recipe][key] * quantity;
      }
      return 'Success';
    }
 }
}

let manager = solution();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));








