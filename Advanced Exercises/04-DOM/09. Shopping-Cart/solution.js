function solve() {
  let addButtons = document.querySelectorAll('.add-product');
  let checkoutButton = document.querySelector('.checkout');
  let uniqueProducts = new Set();
  let prices = [];
  for (const button of addButtons) {
    button.addEventListener('click', () => {
      let productName = button.parentElement.previousElementSibling.firstElementChild.innerHTML;
      let price = button.parentElement.nextElementSibling.innerHTML;
      let productInfo = `Added ${productName} for ${price} to the cart.\n`
      uniqueProducts.add(productName);
      prices.push(Number(price));
      document.querySelector('textarea').value += productInfo;
    });
  }

  checkoutButton.addEventListener('click', () => {
    let checkoutInfo = `You bought ${[...uniqueProducts].join(', ')} for ${prices.reduce((a, x) => a + x, 0).toFixed(2)}.`;
    document.querySelector('textarea').value += checkoutInfo;

    for (const button of document.querySelectorAll('button')) {
      button.disabled = true;
    }
  });
}
