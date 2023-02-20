import "./App.css";

import { characters as initialCharacters } from "./Characters";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState(initialCharacters);

  const shuffleArray = () => {
    setCharacters([...characters.sort((a, b) => 0.5 - Math.random())]);
  };
  const handleIsClicked = (character) => {
    character.isClicked = true;
  };
  const updateScore = (character) => {
    if (character.isClicked) {
      setScore(0);
      clearState();
      updateBestScore();
    } else {
      setScore(score + 1);
    }
  };
  const updateBestScore = () => {
    console.log(score);
    if (score >= bestScore) {
      setBestScore(score);
    }
  };
  const clearState = () => {
    setCharacters(
      initialCharacters.map((character) => ({ ...character, isClicked: false }))
    );
  };

  return (
    <div className="container">
      <h1 className="header yellow-text">Memory Game </h1>
      <p className="info yellow-text">
        Get points by clicking on image but dont click on any more than once
      </p>
      <p className="score yellow-text">Score: {score}</p>
      <p className="best-score yellow-text">Best Score : {bestScore}</p>
      <div className="card-container">
        {characters.map((character) => (
          <div
            key={character.name}
            className="card"
            onClick={() => {
              shuffleArray();
              updateScore(character);
              handleIsClicked(character);
            }}
          >
            <img
              className="card-image"
              src={character.imagePath}
              alt={character.name}
            ></img>
            <p className="card-text"> {character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
