function personalBmi(name, age, weight, height) {
  let BMI = Math.round(weight / (height/100) ** 2);
  let patientObject = {
    name,
    personalInfo: {
      age,
      weight,
      height
    },
    BMI,
    status: calculateStatus(BMI)
  }

  if (patientObject.status === 'obese')
    patientObject.recommendation = 'admission required';

  function calculateStatus(bmi) {
    if (bmi < 18.5)
      return 'underweight';
    
    else if (bmi < 25)
      return 'normal';

    else if (bmi < 30)
      return 'overweight';

    else if (bmi > 30)
      return 'obese';
  }

  return patientObject;
}

console.log(personalBmi('Peter', 29, 75, 182));