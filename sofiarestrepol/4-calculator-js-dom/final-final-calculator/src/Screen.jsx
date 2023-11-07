
import React from 'react';

function Screen({ state }) {
  return (
    <div className="screen">
      <div className="previous-input">{state.previousOp}</div>
      <div className="current-input">{state.currentOp}</div>
    </div>
  );
}

export default Screen;


