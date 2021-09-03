function jsonTable(input) {
  let result = '<table>'
  for (const item of input) {
    currentObj = JSON.parse(item);
    result += `
    <tr>
        <td>${currentObj.name}</td>
        <td>${currentObj.position}</td>
        <td>${currentObj.salary}</td>
    </tr>\n`
  }
  result += '</table>';
  console.log(result);
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);