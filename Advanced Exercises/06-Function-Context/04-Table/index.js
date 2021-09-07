  function solve(){
  let tableRows = document.querySelectorAll('tbody tr');

  for (const row of tableRows) {
    row.addEventListener('click', () => {
      for (const item of tableRows) {
        if (item != row)
          item.removeAttribute('style');
      }
      
        if (row.style.backgroundColor == "rgb(65, 63, 94)")
          row.removeAttribute('style');

        else
          row.style.backgroundColor = '#413f5e';
      
      console.log(row.style)
    }); 
  }
}
