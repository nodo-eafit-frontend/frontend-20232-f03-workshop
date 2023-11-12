import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import './styles/App.scss';

// Definir constantes directamente aquí
const CARD_COLUMNS = 6;
const CARD_ROWS = 3;
const CARD_PAIRS = (CARD_COLUMNS * CARD_ROWS) / 2;
const CARD_IMAGE_PREFIX = 'imagen';
const CARD_IMAGE_EXTENSION = '.jpg';

const App = () => {
  const generateCards = () => {
    const uniquePairs = [...Array(CARD_PAIRS).keys()];
    const allPairs = [...uniquePairs, ...uniquePairs];
    const shuffledPairs = allPairs.sort(() => Math.random() - 0.5);

    return shuffledPairs.map((pair, index) => ({
      id: index + 1,
      image: `${CARD_IMAGE_PREFIX}${pair + 1}${CARD_IMAGE_EXTENSION}`,
      isFlipped: false,
      isMatched: false,
    }));
  };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleCardClick = (id) => {
    if (flippedCards.size < 2 && !flippedCards.has(id)) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards((prevFlipped) => new Set([...prevFlipped, id]));
    }
  };

  useEffect(() => {
    if (flippedCards.size === 2) {
      const [card1, card2] = [...flippedCards].map(
        (flippedId) => cards.find((card) => card.id === flippedId) || {}
      );
  
      if (card1.image === card2.image) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            flippedCards.has(card.id) ? { ...card, isMatched: true } : card
          )
        );
        setScore((prevScore) => prevScore + 100);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              flippedCards.has(card.id) ? { ...card, isFlipped: false } : card
            )
          );
          setScore((prevScore) => Math.max(prevScore - 50, 0));
        }, 500);
      }
  
      setFlippedCards(new Set());
    }
  }, [flippedCards, cards]);

  const handleStartGame = () => {
    setGameStarted(true);
    setCards(generateCards());
    setScore(0);
  };

  const handleRestartGame = () => {
    setCards(generateCards());
    setScore(0);
    setFlippedCards(new Set());
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        {!gameStarted && <button onClick={handleStartGame}>Start Game</button>}
        {gameStarted && <button onClick={handleRestartGame}>Restart Game</button>}
      </header>
      {gameStarted && (
        <main>
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
          <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p>Score: {score}</p>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
