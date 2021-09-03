function storeCatalogue(input) {
  const catalogue = {};
  for (const item of input) {
    let [product, price] = item.split(' : ');
    let productPrice = product + ': ' + price;
    let initialLetter = product[0];
    if (!Object.keys(catalogue).includes(initialLetter))
      catalogue[initialLetter] = [];
    catalogue[initialLetter].push(productPrice);
  }
  Object.keys(catalogue)
        .sort()
        .forEach(category => {
          console.log(category);
          catalogue[category]
              .sort()
              .forEach(product => {
                console.log(`  ${product}`)
              })
        });
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
