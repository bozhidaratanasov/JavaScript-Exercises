function roadRadar(data) {
  const areaLimit = {
    'residential': 20,
    'city': 50,
    'interstate': 90,
    'motorway': 130
  }

  const speed = data[0];
  const area = data[1];

  const speedDifference = speed - areaLimit[area];
  if (speedDifference < 0)
    return `Driving ${speed} km/h in a ${areaLimit[area]} zone`;
  else if (speedDifference > 0 && speedDifference < 20)
    return `The speed is ${speedDifference} km/h faster than the allowed speed of ${areaLimit[area]} - speeding`;
  else if (speedDifference > 20 && speedDifference < 40)
    return `The speed is ${speedDifference} km/h faster than the allowed speed of ${areaLimit[area]} - excessive speeding`;
  else if (speedDifference > 40)
    return `The speed is ${speedDifference} km/h faster than the allowed speed of ${areaLimit[area]} - reckless driving`;
}


