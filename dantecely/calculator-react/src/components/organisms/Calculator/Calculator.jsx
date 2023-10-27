import { useState } from 'react';

import Board from '../../molecules/Board/Board';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import './styles.scss';

const namespace = 'calculator';

const Calculator = () => {
  const [operations, setOperations] = useState();

  const handlerButton = (newText) => {
    const result = operations + newText;
    setOperations(result);
  };

  return (
    <section className={namespace}>
      <Board operations={operations} />
      <Keyboard onClick={handlerButton} />
    </section>
  );
};

export default Calculator;
