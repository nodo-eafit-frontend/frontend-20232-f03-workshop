
import React from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen';

function Calculator({ state, dispatch }) {
  return (
    <div className="calculator">
      <Screen state={state} />
      <Keyboard dispatch={dispatch} />
    </div>
  );
}

export default Calculator;