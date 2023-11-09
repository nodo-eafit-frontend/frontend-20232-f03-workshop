// En Card.js
import React from "react";

const Card = ({ cardData, onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => onClick(cardData.id)}
    >
      {isFlipped ? <img src={cardData.image} alt={cardData.name} /> : null}
    </div>
  );
};

export default Card;
