// Game.js
import React, { useState } from "react";
import Board from "./Board";

const Game = ({ cards }) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (cardId) => {
    if (flippedCards.includes(cardId) || matchedPairs.includes(cardId)) {
      return;
    }

    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, cardId]);
    }

    if (flippedCards.length === 1) {
      setMoves(moves + 1);

      if (cards[flippedCards[0] - 1].name === cards[cardId - 1].name) {
        setMatchedPairs([...matchedPairs, flippedCards[0], cardId]);
      }
    }

    if (flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };


  const isGameWon = matchedPairs.length === cards.length * 2;

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <p>Movimientos: {moves}</p>
      <Board cards={cards} onCardClick={handleCardClick} flippedCards={flippedCards} />
      {isGameWon && <p>¡Has ganado el juego!</p>}
    </div>
  );
};

export default Game;
