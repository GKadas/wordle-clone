import React from "react";
import { range } from "../../../src/utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessResults, answer }) {
  const currentGuess = checkGuess(guessResults, answer);

  function getStatus(status) {
    if (status === "undefined" || status === "incorrect") {
      return "cell";
    } else if (status === "misplaced") {
      return "cell misplaced";
    } else {
      return "cell correct";
    }
  }

  return (
    <p className="guess">
      {range(5).map((colIndex) => (
        <span
          className={
            currentGuess ? getStatus(currentGuess[colIndex].status) : "cell"
          }
          key={Math.random()}
        >
          {guessResults != undefined && guessResults[colIndex]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
