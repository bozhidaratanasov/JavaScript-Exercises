function attachEventsListeners() {
  let days = document.querySelector('#days');
  let hours = document.querySelector('#hours');
  let minutes = document.querySelector('#minutes');
  let seconds = document.querySelector('#seconds');

  document.querySelector('#daysBtn').addEventListener('click', () => convert(days.value * 86400));
  document.querySelector('#hoursBtn').addEventListener('click', () => convert(hours.value * 3600));
  document.querySelector('#minutesBtn').addEventListener('click', () => convert(minutes.value * 60));
  document.querySelector('#secondsBtn').addEventListener('click', () => convert(seconds.value));

  function convert(sec = 0) {
    days.value = sec / 86400;
    hours.value = sec / 3600;
    minutes.value = sec / 60;
    seconds.value = sec;
  }
}