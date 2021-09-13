function carFactory(description) {
  const engines = {
    'small': {power: 90, volume: 1800},
    'normal': {power: 120, volume: 2400},
    'monster': {power: 200, volume: 3500}
  }

  let engine;
  for (const engineType of Object.values(engines)) {
    if (description.power <= engineType.power) {
      engine = engineType;
      break;
    }
  }

  let wheel;
  if (description.wheelsize % 2 == 0)
    wheel = description.wheelsize - 1;
  else {
    wheel = description.wheelsize;
  }

  return {
    model: description.model,
    engine: engine,
    carriage: {
      type: description.carriage,
      color: description.color,
    },
    wheels: [wheel, wheel, wheel, wheel]
  }
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));