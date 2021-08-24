function timeToWalk(steps, footprintLength, speed) {
  const distance = steps * footprintLength;
  const numberOfBreaks = Math.floor(distance / 500);
  speed = speed * 5 / 18; //convert speed to m/s
  let time = distance / speed;
  time += 60 * numberOfBreaks + 1;
  
  return new Date(time * 1000).toISOString().substr(11, 8);
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));
