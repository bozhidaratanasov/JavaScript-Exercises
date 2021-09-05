function solve() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let button = document.querySelector('button');

  button.addEventListener('click', () => {
    let inputElementValue = document.querySelector('input').value;
    let liElemenents = document.getElementsByTagName('li');
    let firstLetter = inputElementValue[0].toLowerCase();
    let name = inputElementValue[0].toUpperCase() + inputElementValue.slice(1).toLowerCase();
    for(let i = 0; i < liElemenents.length; i++) {
      if (i === alphabet.indexOf(firstLetter)){
        if (liElemenents[i].innerHTML.length > 0)
          liElemenents[i].innerHTML += `, ${name}`;
        else
          liElemenents[i].innerHTML = name;
      }
    }
    document.querySelector('input').value = '';
  })
}