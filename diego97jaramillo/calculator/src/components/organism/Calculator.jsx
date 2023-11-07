
import Keyboard from '../molecules/Keyboard/keyboard';
import './calculator.scss';

const namespace = "calculator";

const Calculator = () => {
    return (
        <section className={namespace}>
            <Board />
            <Keyboard />
        </section>
    )
}

export default Calculator;
