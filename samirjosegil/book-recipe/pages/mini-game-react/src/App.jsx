import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import GameControls from './components/GameControls/GameControls'; 
import './App.scss';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const CARD_COLUMNS = 6;
  const CARD_ROWS = 3;
  const CARD_PAIRS = (CARD_COLUMNS * CARD_ROWS) / 2;
  const CARD_IMAGE_PREFIX = 'imagen';
  const CARD_IMAGE_EXTENSION = '.jpg';

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

  const handleStartGame = () => {
    setGameStarted(true);
    setCards(generateCards());
    setScore(0);
  };

  const handleRestartGame = () => {
    setGameStarted(false);
    setCards(generateCards());
    setScore(0);
    setFlippedCards(new Set());
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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Memory Game</h1>
        <GameControls
          handleStartGame={() => {
            setGameStarted(true);
            setCards(generateCards());
            setScore(0);
          }}
          handleRestartGame={() => {
            setGameStarted(false);
            setCards(generateCards());
            setScore(0);
            setFlippedCards(new Set());
          }}
        />
      </header>
      {gameStarted && (
        <main>
          <Board cards={cards} handleCardClick={handleCardClick} />
          <Scoreboard score={score} />
        </main>
      )}
    </div>
  );
};

export default App;

