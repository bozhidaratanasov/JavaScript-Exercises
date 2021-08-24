function calculatePrice(typeOfFruit, weightInGrams, pricePerKg) {
  const weightInKg = weightInGrams / 1000;
  const totalPrice = weightInKg * pricePerKg;

  return `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`;
}

console.log(calculatePrice('orange', 2500, 1.80));
console.log(calculatePrice('apple', 1563, 2.35));

