document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            const clickedButton = e.target;

            if (clickedButton.id === "clear") {
                clearDisplay();
            } else if (clickedButton.id === "calculate") {
                calculateResult();
            } else if (clickedButton.classList.contains("number")) {
                appendToDisplay(clickedButton.textContent);
            } else if (clickedButton.classList.contains("operator")) {
                handleOperator(clickedButton.textContent);
            }
        });
    });

    function appendToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = "";
        previousInput = "";
        currentOperator = "";
        display.value = "";
    }

    function handleOperator(operator) {
        if (currentOperator !== "") {
            calculateResult();
        }
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = "";
    }

    function calculateResult() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperator) {
            case "+":
                currentInput = (num1 + num2).toString();
                break;
            case "-":
                currentInput = (num1 - num2).toString();
                break;
            case "*":
                currentInput = (num1 * num2).toString();
                break;
            case "/":
                if (num2 !== 0) {
                    currentInput = (num1 / num2).toString();
                } else {
                    currentInput = "Error";
                }
                break;
        }

        display.value = currentInput;
        currentOperator = "";
    }
});
