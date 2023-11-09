import React from "react";
import Card from "./Card";

const Board = ({ cards, onCardClick, flippedCards }) => {
  if (!Array.isArray(cards)) {
    return null;
  }

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          cardData={card}
          onClick={onCardClick}
          isFlipped={flippedCards.includes(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;
