// script.js
let result = document.getElementById('result');
let currentInput = '';
function appendToResult(value) {
  currentInput += value;
  result.value = currentInput;
}
function clearResult() {
  currentInput = '';
  result.value = '';
}
function calculateResult() {
  try {
    currentInput = eval(currentInput);
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
  }
}

function handleKeyDown(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        appendToResult(key);
    } else if (key === "Escape") {
        clearResult();
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    }
}
document.addEventListener("keydown", handleKeyDown);