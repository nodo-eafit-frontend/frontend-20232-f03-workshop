import Keyboard from "../molecules/Keyboard/keyboard";
import Board from "../molecules/Board/Board";
import './calculator.scss';

const Calculator = () => {
    return (
        <section>
            <Board />
            <Keyboard />
        </section>
    )
}

export default Calculator;
