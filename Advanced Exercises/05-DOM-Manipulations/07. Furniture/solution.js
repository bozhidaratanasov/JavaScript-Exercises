function solve() {
  let inputArea = document.querySelectorAll('textarea')[0];
  let outputArea = document.querySelectorAll('textarea')[1];
  let generateButton = document.querySelectorAll('button')[0];
  let buyButton = document.querySelectorAll('button')[1];

  generateButton.addEventListener('click', () => {
    let furnitureList = JSON.parse(inputArea.value);
    
    for (const furniture of furnitureList) {
      let tableRow = document.createElement('tr');

      let imgTd = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      imgTd.appendChild(img);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = furniture.name;
      nameTd.appendChild(nameP);
      
      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = furniture.price;
      priceTd.appendChild(priceP);

      let decFactorTd = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = furniture.decFactor;
      decFactorTd.appendChild(decFactorP);

      let markTd = document.createElement('td');
      let markCheckbox = document.createElement('input');
      markCheckbox.type = 'checkbox'
      markTd.appendChild(markCheckbox);

      tableRow.appendChild(imgTd);
      tableRow.appendChild(nameTd);
      tableRow.appendChild(priceTd);
      tableRow.appendChild(decFactorTd);
      tableRow.appendChild(markTd);

      document.querySelector('tbody').appendChild(tableRow);
    }
  });

  buyButton.addEventListener('click', () => {
    let trElements = document.querySelectorAll('tbody tr');
    let names = [];
    let totalPrice = 0;
    let decFactors = [];

    for (const element of trElements) {
      if (element.lastElementChild.firstChild.checked) {
        names.push(element.children[1].textContent);
        totalPrice += Number(element.children[2].textContent);
        decFactors.push(Number(element.children[3].textContent));
      }
    }

    outputArea.value += `Bought furniture: ${names.join(', ')}\n`;
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.value += `Average decoration factor: ${decFactors.reduce((a, x) => a + x) / decFactors.length}`;
  });
}