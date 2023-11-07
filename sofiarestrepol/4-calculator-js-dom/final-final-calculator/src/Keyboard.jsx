
// Keyboard.jsx
import React from 'react';
import Button from './Button';

function Keyboard({ dispatch }) {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'AC', '0', '=', '+',
  ];

  return (
    <div className="keyboard">
      {buttons.map((button) => (
        <Button key={button} label={button} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default Keyboard;

