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
    const [leftNum, setLeftNum] = useState('0');
    const [rightNum, setRightNum] = useState('0');
    const leftNumber = Number(leftNum);
    const rightNumber = Number(rightNum);



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
                prevResult = text.substring(0, text.length - 1);
                const [num1, num2] = result.split(operator);
                setLeftNum(num1);

                setRightNum(num2.slice(0,-1));

                if (operator === '+') {
                    plus(leftNumber, rightNumber);
                } else if (operator === '-') {
                    minus(leftNumber, rightNumber);
                } else if (operator === '*') {
                    multiply(leftNumber, rightNumber);
                } else if (operator === '/') {
                    divide(leftNumber, rightNumber);
                } else if (operator === '%') {
                    percentage(leftNumber, rightNumber);
                };
                break;
        }

        setText(result);


    }


    return (
        <section className={namespace}>
            <Board textGiven={text} />
            <Keyboard onClick={handlerButton} />
        </section>
    )
}


export default Calculator;
