function wordsUppercase(sentence){
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const words = [];
  let currentWord = '';
  for (let i = 0; i < sentence.length; i++){
    if (!isLetter(sentence[i])){
      if(currentWord)
        words.push(currentWord);
      currentWord = '';
      continue;
    }
    currentWord += sentence[i];
    if (i == sentence.length - 1)
      words.push(currentWord);
  }
  return words.map(x => x.toUpperCase()).join(', ');
}

console.log(wordsUppercase('Functions in JS can be nested, i.e. hold other functions'));