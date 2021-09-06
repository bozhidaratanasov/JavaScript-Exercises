function lockedProfile() {
  let buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    button.parentElement.children[2].addEventListener('click', () => {
      button.disabled = true;
    });

    button.parentElement.children[4].addEventListener('click', () => {
      button.disabled = false;
    });

    button.addEventListener('click', () => {
      if (button.textContent === 'Show more') {
        button.previousElementSibling.style.display = 'block';
        button.textContent = 'Hide it';
      }
      else {
        button.previousElementSibling.style.display = 'none';
        button.textContent = 'Show more';
      }
    });
  }
}
