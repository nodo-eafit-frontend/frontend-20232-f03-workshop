
import { useState, useEffect } from 'react';

export const useCardMatching = (firstCard, secondCard) => {
  const [unflippedCards, setUnflippedCard] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  useEffect(() => {
    // Implementa la lógica de comparación y desactivación de cartas aquí
  }, [secondCard]);

  const disableCards = () => {
    // Implementa la lógica para desactivar las cartas aquí
  };

  const unflipCards = () => {
    // Implementa la lógica para volver a voltear las cartas aquí
  };

  const resetCards = () => {
    // Implementa la lógica para restablecer las cartas aquí
  };

  return [unflippedCards, disabledCards, disableCards, unflipCards, resetCards];
};
