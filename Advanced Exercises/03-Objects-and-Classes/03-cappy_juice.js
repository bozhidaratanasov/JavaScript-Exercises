function cappyJuice(input) {
  const juiceToQuantity = {};
  const orderOfObtaining = [];
  for (const item of input) {
    let [juice, quantity] = item.split(' => ');
    quantity = Number(quantity);
    if (Object.keys(juiceToQuantity).includes(juice))
      juiceToQuantity[juice] += quantity;
    else
      juiceToQuantity[juice] = quantity;

    if(juiceToQuantity[juice] >= 1000 && !orderOfObtaining.includes(juice))
      orderOfObtaining.push(juice);

  }
  for (const item of orderOfObtaining) {
    console.log(`${item} => ${Math.floor(juiceToQuantity[item] / 1000)}`);  
  }
}

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);