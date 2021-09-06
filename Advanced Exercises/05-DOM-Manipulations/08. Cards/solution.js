function solve() {
  let cards = document.querySelectorAll('img');
  let leftSpan = document.querySelector('span');
  let rightSpan = document.querySelectorAll('span')[2];
  let historyDiv = document.querySelector('#history');
  let currentTopCard;
  let currentBottomCard;
  let counter = 0;

  for (const card of cards) {
    card.addEventListener('click', () => {
    counter++;
    card.src = 'images/whiteCard.jpg';
    if (card.parentElement.id === 'player1Div') {
      leftSpan.textContent = card.getAttribute('name');
      currentTopCard = card;
    }
    else {
      rightSpan.textContent = card.getAttribute('name');
      currentBottomCard = card;
    }

    if (counter === 2) {
      let topCardValue = Number(currentTopCard.getAttribute('name'));
      let bottomCardValue = Number(currentBottomCard.getAttribute('name'));
      if (topCardValue > bottomCardValue) {
        currentTopCard.style.borderStyle = "2px solid green";
        currentBottomCard.style.borderStyle = "2px solid red";
      }
      else {
        currentTopCard.style.border = "2px solid red";
        currentBottomCard.style.border = "2px solid green";
      }
      historyDiv.textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;
      leftSpan.textContent = '';
      rightSpan.textContent = '';
      counter = 0;
    }
    });
  }
}