import React, { useState } from "react";
import Keyboard from "../molecules/Keyboard/keyboard";
import Board from "../molecules/Board/Board";
import './calculator.scss';



const namespace = "calculator";

const plus = (number1, number2) => {
    return number1 + number2;
};
const minus = (number1, number2) => {
    return number1 - number2;
};
const multiply = (number1, number2) => {
    return number1 * number2;
};
const divide = (number1, number2) => {
    return number1 / number2;
};
const percentage = (number1, number2) => {
    return number1 / number2 * 100;
};

const Calculator = () => {
    const [text, setText] = useState('');
    const [operator, setOperator] = useState();
    const [finalValue, setFinalValue] = useState();




    const handlerButton = (newtext) => {
        let result = text + newtext;



        switch (newtext) {
            case '+':
                setOperator(newtext);
                break;
            case '-':
                setOperator(newtext);
                break;
            case '/':
                setOperator(newtext);
                break;
            case '*':
                setOperator(newtext);
                break;
            case '%':
                setOperator(newtext);
                break;
            case '←':
                result = text.slice(0, -1);
                break;
            case '=':
                result = result.substring(0, result.length - 1);
                const [num1, num2] = result.split(operator);
                const leftNumber = Number(num1);
                const rightNumber = Number(num2);

                if (operator === '+') {
                    const operationResult = plus(leftNumber, rightNumber);
                    setFinalValue(operationResult);
                } else if (operator === '-') {
                    const operationResult = minus(leftNumber, rightNumber);
                    console.log(finalValue);
                    setFinalValue(operationResult);
                } else if (operator === '*') {
                    const operationResult = multiply(leftNumber, rightNumber);
                    setFinalValue(operationResult);
                } else if (operator === '/') {
                    const operationResult = divide(leftNumber, rightNumber);
                    setFinalValue(operationResult);
                } else if (operator === '%') {
                    const operationResult = percentage(leftNumber, rightNumber);
                    setFinalValue(operationResult);
                };
                break;
        }

        setText(result);


    }


    return (
        <section className={namespace}>
            <Board textGiven={text} result={finalValue} />
            <Keyboard onClick={handlerButton} />
        </section>
    )
}


export default Calculator;
