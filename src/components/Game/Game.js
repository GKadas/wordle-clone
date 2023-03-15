import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");
  const [guessResults, setGuessResults] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const nextGuessResults = [...guessResults, guessInput];
    setGuessResults(nextGuessResults);
    setGuessInput("");
    handleWinLose(nextGuessResults);
  }

  function handleWinLose(results) {
    const isFound = results.some((element) => {
      if (element === answer) {
        return true;
      }
      return false;
    });

    if (results.length <= 6 && isFound) {
      setIsDisabled(true);
      setGameStatus(true);
    } else if (results.length === 6 && !isFound) {
      setIsDisabled(true);
      setGameStatus(false);
    } else {
      setIsDisabled(false);
    }
  }

  return (
    <>
      {isDisabled ? (
        <Banner game={gameStatus} guesses={guessResults} answer={answer} />
      ) : null}
      <GuessResults guessResults={guessResults} answer={answer} />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="guess-input">Enter your guess</label>{" "}
          <input
            id="guess-input"
            value={guessInput}
            onChange={(event) => {
              setGuessInput(event.target.value.toUpperCase());
            }}
            pattern="\w{5,5}"
            required
            disabled={isDisabled}
          />
        </fieldset>
      </form>
    </>
  );
}

export default Game;
