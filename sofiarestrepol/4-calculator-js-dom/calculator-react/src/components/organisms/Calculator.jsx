import React, { useState } from "react";
import Keyboard from "../molecules/Keyboard/Keyboard.jsx";
import Screen from "../molecules/Screen/Screen.jsx";
import './styles.scss';



const namespace = "calculator"; //para darle nombre a un elemento y reutilizarlo. aqui es donde se define la clase principal, la que se usa despues para styles

const Calculator = () => {
  const [operations, setOperations] = useState(); 

  const handlerButton = (newText) => {
    const result = operations + newText;
    setOperations(result);
  };


  return (
    <section className={namespace}>
      <Screen operations={operations} />
      <Keyboard onClick={handlerButton} />
    </section>
  )
};

export default Calculator;

