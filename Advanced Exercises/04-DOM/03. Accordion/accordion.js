function toggle() {
    let button = document.querySelector('.button');
    let divElement = document.querySelector('#extra');
    if(button.innerHTML == 'More') {
      button.innerHTML = 'Less';
      divElement.style.display = 'block';
    }
    else {
      button.innerHTML = 'More';
      divElement.style.display = 'none';
    }
}