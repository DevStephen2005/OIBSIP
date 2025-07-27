function convertTemp() {
  const degrees = parseFloat(document.getElementById('degrees').value);
  const type = document.getElementById('type').value;
  const result = document.getElementById('result');

  if (isNaN(degrees)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;
  if (type === "fahrenheit") {
    // F to C
    converted = (degrees - 32) * (5 / 9);
    result.textContent = `${converted.toFixed(4)} °C`;
  } else {
    // C to F
    converted = (degrees * 9 / 5) + 32;
    result.textContent = `${converted.toFixed(4)} °F`;
  }
}






