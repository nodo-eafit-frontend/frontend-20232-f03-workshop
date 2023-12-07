import Keyboard from "../molecules/Keyboard/keyboard";
import Board from "../molecules/Board/Board";
import './calculator.scss';

let result = 0;
const Calculator = () => {


    const handlerButton = (newtext) => {
       return result += newtext;
    }
    return (
        <section>
            <Board result={result} />
            <Keyboard onClick={handlerButton}/>
        </section>
    )
}

export default Calculator;
