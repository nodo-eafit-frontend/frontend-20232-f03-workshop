import React from 'react';
import Card from '../Card/Card';

export const Board = ({ cards, handleCardClick }) => (
  <div className="game-container">
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        image={card.image}
        isFlipped={card.isFlipped}
        isMatched={card.isMatched}
        handleClick={() => handleCardClick(card.id)}
      />
    ))}
  </div>
);