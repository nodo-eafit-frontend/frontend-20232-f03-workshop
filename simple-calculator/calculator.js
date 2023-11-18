const display = document.getElementById('display');

let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

const buttons = document.querySelectorAll('.calculator-button button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    });
});



