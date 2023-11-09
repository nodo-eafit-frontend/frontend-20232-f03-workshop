import React from "react";
import Game from "./components/Game";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";
import card5 from "./images/card5.jpg";
import "./App.css";

function App() {
  const cards = [
    { id: 1, image: card1, name: "Card 1" },
    { id: 2, image: card2, name: "Card 2" },
    { id: 3, image: card3, name: "Card 3" },
    { id: 4, image: card4, name: "Card 4" },
    { id: 5, image: card5, name: "Card 5" }
  ];

  return (
    <div className="App">
      <Game cards={cards} />
    </div>
  );
}

export default App;
