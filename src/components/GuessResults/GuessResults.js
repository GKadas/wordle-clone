import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess
          guessResults={guessResults[rowIndex]}
          answer={answer}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}

export default GuessResults;
