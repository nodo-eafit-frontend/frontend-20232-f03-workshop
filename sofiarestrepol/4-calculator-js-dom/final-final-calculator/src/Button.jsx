// Button.jsx
import React from 'react';
import { ACTIONS } from './actions';



function Button({ label, dispatch }) {
  const handleClick = () => {
    if (label >= '0' && label <= '9') { //si se hace click en un numero..
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: label } }); //agregar ese numero a la operacion actual
    } else if (label === '+' || label === '-' || label === '*' || label === '/') {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: label } });
    } else if (label === '=') {
      dispatch({ type: ACTIONS.CALCULATE });
    } else if (label === 'AC') {
      dispatch({ type: ACTIONS.CLEAR });
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
