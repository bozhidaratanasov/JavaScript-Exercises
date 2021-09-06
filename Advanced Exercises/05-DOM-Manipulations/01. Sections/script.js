function create(words) {
  let contentElement = document.querySelector('#content')
   for (const word of words) {
     let div = document.createElement('div');
     let paragraph = document.createElement('p');
     paragraph.textContent = word;
     paragraph.style.display = 'none';
     div.appendChild(paragraph);
     div.addEventListener('click', () => {
       div.firstElementChild.style.display = 'block'
     });
     contentElement.appendChild(div);
   }
}
