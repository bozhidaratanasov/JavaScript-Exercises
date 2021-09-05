function solve() {
  let selectElement = document.querySelector('#selectMenuTo');
  let button = document.querySelector('button');
  let binaryOption = document.createElement('option');
  let hexadecimalOption = document.createElement('option');
  binaryOption.textContent = 'Binary';
  binaryOption.value = 'binary';
  hexadecimalOption.textContent = 'Hexadecimal';
  hexadecimalOption.value = 'hexadecimal';
  selectElement.appendChild(binaryOption);
  selectElement.appendChild(hexadecimalOption);
  button.addEventListener('click', () => {
    let numberToConvert = Number(document.querySelector('#input').value);
    if (selectElement.value === 'binary') 
      document.querySelector('#result').value = numberToConvert.toString(2);
    else if (selectElement.value === 'hexadecimal')
      document.querySelector('#result').value = numberToConvert.toString(16).toUpperCase();    
  })  
}