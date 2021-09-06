function attachEventsListeners() {
  let inputDistance = document.querySelector('#inputDistance');
  let outputDistance = document.querySelector('#outputDistance');
  let inputSelectList = document.querySelector('#inputUnits');
  let outputSelectList = document.querySelector('#outputUnits');
  let convertButton = document.querySelector('#convert');

  let conversionRates = {
    km:1000,
    m:1,
    cm:0.01,
    mm:0.001,
    mi:1609.34,
    yrd:0.9144,
    ft:0.3048,
    in:0.0254,
  };

  convertButton.addEventListener('click', () => {
    let convertFrom = inputSelectList.value;
    let convertTo = outputSelectList.value;

    let valueInMeters = inputDistance.value * conversionRates[convertFrom];
    let convertedValue = valueInMeters / conversionRates[convertTo];
    outputDistance.value = convertedValue;
  });
}