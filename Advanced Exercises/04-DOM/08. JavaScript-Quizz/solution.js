function solve() {
  let sections = document.querySelectorAll('section');
  let pElements = document.querySelectorAll('.quiz-step li p');
  let result = document.querySelector('#results');
  let resulth1 = document.querySelector('#results h1')
  let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let rightAnswers = 0;
  let index = 0;
  for (const element of pElements) {
    element.addEventListener('click', () => {
      if (correctAnswers.includes(element.innerHTML))
        rightAnswers++;
      sections[index].style.display = 'none';
      if (sections[index + 1] !== undefined) {
        sections[index + 1].style.display = 'block';
        index++;
      }
      else {
        result.style.display = 'block';
      if (rightAnswers === 3)
        resulth1.innerHTML = 'You are recognized as top JavaScript fan!';
      else
      resulth1.innerHTML = `You have ${rightAnswers} right answers`;
      }
    })
  }
}