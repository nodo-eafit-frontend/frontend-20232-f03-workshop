import React, { useState } from 'react';

const GameControls = ({ handleStartGame, handleRestartGame }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    handleStartGame();
  };

  const restartGame = () => {
    handleRestartGame();
    setGameStarted(false);
  };

  return (
    <div>
      {!gameStarted && (
        <button className="App-button" onClick={startGame}>
          Start Game
        </button>
      )}
      {gameStarted && (
        <button className="App-button" onClick={restartGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default GameControls;
