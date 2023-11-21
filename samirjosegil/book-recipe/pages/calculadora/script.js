let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
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
