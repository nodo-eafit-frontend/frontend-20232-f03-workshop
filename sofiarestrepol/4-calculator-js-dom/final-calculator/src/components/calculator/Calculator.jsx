
import Keyboard from "../keyboard/Keyboard.jsx";
import Screen from "../screen/Screen.jsx";
import './calculator.scss';


const namespace = "calculator"; //para darle nombre a un elemento y reutilizarlo. aqui es donde se define la clase principal, la que se usa despues para styles

const Calculator = () => {

  return (
    <section className={namespace}>
      <Screen />
      <Keyboard />
    </section>
  )
};

export default Calculator;