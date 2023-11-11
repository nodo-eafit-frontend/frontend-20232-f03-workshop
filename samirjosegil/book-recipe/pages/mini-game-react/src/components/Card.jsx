import React from 'react';
import CardImage from './CardImage';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ id, image, isFlipped, isMatched, handleClick }) => (
  <div className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`} onClick={() => handleClick(id)}>
    {isFlipped && <CardImage src={`./images/${image}`} alt={`Card ${id}`} />}
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
