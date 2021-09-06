function encodeAndDecodeMessages() {
  let inputElement = document.querySelectorAll('textarea')[0];
  let outputElement = document.querySelectorAll('textarea')[1];
  let encodeButton = document.querySelectorAll('button')[0];
  let decodeButton = document.querySelectorAll('button')[1];

  encodeButton.addEventListener('click', () => {
    let inputMessage = inputElement.value;
    let encodedMessage = '';
    for (const char of inputMessage) {
      encodedMessage += String.fromCharCode(char.charCodeAt() + 1);
    }
    outputElement.value = encodedMessage;
    inputElement.value = '';
  });

  decodeButton.addEventListener('click', () => {
    let encodedMessage = outputElement.value;
    let decodedMessage = '';
    for (const char of encodedMessage) {
      decodedMessage += String.fromCharCode(char.charCodeAt() - 1);
    }
    outputElement.value = decodedMessage;
  });
}