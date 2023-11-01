import { useState, useReducer } from 'react';

import Board from '../../molecules/Board/Board';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import './styles.scss';
import { reducer, initState } from './reducer';
import { operate } from './actions';

const namespace = 'calculator';

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handlerButton = (newText) => {
    operate(state, newText, dispatch);
    dispatch({ type: 'SET_OPERATION', payload: newText });
    dispatch({ type: 'SET_BOARD', payload: newText });
  };

  return (
    <section className={namespace}>
      <span>Operation Type: {state.operationType}</span>
      <Board board={state.board} result={state.result} />
      <Keyboard onClick={handlerButton} />
    </section>
  );
};

export default Calculator;
