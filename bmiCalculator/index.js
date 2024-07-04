const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Please enter a valid Height ${height}</span>`;
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Please enter a valid Weight ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.5) {
      result.innerHTML = `<span>${bmi} - You are Underweight</span>`;
    } else if (bmi <= 24.9) {
      result.innerHTML = `<span>${bmi} - You are in Normal Weight Range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} - You are Overweight</span>`;
    }
  }
});
