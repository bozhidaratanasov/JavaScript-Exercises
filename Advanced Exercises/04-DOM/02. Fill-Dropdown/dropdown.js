function addItem() {
    let textElement = document.querySelector('#newItemText').value;
    let valueElement = document.querySelector('#newItemValue').value;
    let option = document.createElement('option');
    option.textContent = textElement;
    option.value = valueElement;
    document.querySelector('#menu').appendChild(option);
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';
}
