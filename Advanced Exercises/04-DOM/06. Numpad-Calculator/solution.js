function solve() {
  let buttons = document.querySelectorAll('.keys button');
  let clearButton = document.querySelector('.clear');
  let expression = document.querySelector('#expressionOutput');
  let resultOutput = document.querySelector('#resultOutput')
  let operators = ['+', '-', '/', '*'];
  for (const button of buttons) {
    button.addEventListener('click', () => {
      if (button.value === '=') 
        resultOutput.textContent = eval(expression.textContent);
        
      if (operators.includes(button.value))
        expression.textContent += ` ${button.value} `;
      else if (expression.textContent.length > 0 && button.value !== '=')
        expression.textContent += button.value;
      else if (expression.textContent.length === 0 && button.value !== '=')
        expression.textContent = button.value;
    })
  }

  clearButton.addEventListener('click', () => {
    expression.textContent = '';
    resultOutput.textContent = '';
  })
}
