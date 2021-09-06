function solve() {
  let searchField = document.querySelector('#searchField');
  let searchButton = document.querySelector('#searchBtn');
  let tableRows = document.querySelectorAll('tbody tr');
  let tableCells = document.querySelectorAll('tbody td');

  searchButton.addEventListener('click', () => {
    for (const row of tableRows) {
      if (row.classList.contains('select'))
        row.classList.remove('select')
    }

    for (const cell of tableCells) {
      if (cell.textContent.includes(searchField.value))
        cell.parentElement.classList.add('select');
    }
  });
}