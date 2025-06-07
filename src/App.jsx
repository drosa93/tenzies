import Die from "./components/Die";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => allNewDice());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const stored = localStorage.getItem("bestScore");
    return stored !== null ? Number(stored) : 0;
  });

  let gameWon =
    dice.every((die) => die.isHeld === true) &&
    dice.every((die) => die.value === dice[0].value);
  useEffect(() => {
    if (
      gameWon === true &&
      (score < bestScore || bestScore === 0 || Number.isNaN(bestScore))
    ) {
      setBestScore(score);
    }
  }, [gameWon, score, bestScore]);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  function allNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld === false
            ? {
                ...die,
                value: Math.ceil(Math.random() * 6),
              }
            : die
        )
      );

      setScore((prevScore) => prevScore + 1);
    } else {
      setDice(allNewDice);
      setScore(0);
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die
      )
    );
  }

  function resetBestScore() {
    setBestScore(0);
    localStorage.setItem("bestScore", bestScore);
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <>
      <main>
        {gameWon === true && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <h2 className="bestScore">{bestScore === 0 || Number.isNaN(bestScore) ? 'Play a game first Twin' : `Your best score is ${bestScore}`}</h2>
        <h3 className="currentScore">your current score is {score}</h3>
        <div className="container">{diceElements}</div>
        <div>
          <button className="roll" onClick={rollDice}>
            {gameWon === true ? "New Game" : "Roll"}
          </button>
          {bestScore === 0 || Number.isNaN(bestScore) ? null : (
            <button className="roll" onClick={resetBestScore}>
              Reset best score
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
