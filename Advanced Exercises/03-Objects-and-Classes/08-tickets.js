function tickets(input, criteria) {
  const tickets = [];
  for (const item of input) {
    let[destination, price, status] = item.split('|');
    price = Number(price);
    tickets.push({destination, price, status});
  }
  let sortedTickets;
  if(criteria === 'destination')
    sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));

  else if(criteria === 'price')
    sortedTickets = tickets.sort((a, b) => a.price - b.price);

  else if(criteria === 'status')
    sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status));

  return sortedTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'], 'destination'
));