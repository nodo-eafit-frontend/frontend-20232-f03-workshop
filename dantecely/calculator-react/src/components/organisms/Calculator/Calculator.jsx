import Board from "../../molecules/Board/Board";
import Keyboard from "../../molecules/Keyboard/Keyboard";
import './styles.scss';

const namespace = "calculator";

const Calculator = () => {
  return (
    <section className={namespace}>
      <Board />
      <Keyboard />
    </section>
  );
};

export default Calculator;
