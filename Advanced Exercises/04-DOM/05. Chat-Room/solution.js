function solve() {
  let inputElement = document.querySelector('#chat_input');
  let chatMessages = document.querySelector('#chat_messages');
  let button = document.querySelector('#send');
  button.addEventListener('click', () => {
    let newMessage = document.createElement('div');
    newMessage.setAttribute('class', 'message my-message');
    newMessage.innerHTML = inputElement.value;
    chatMessages.appendChild(newMessage);
    inputElement.value = '';
  }) 
}


