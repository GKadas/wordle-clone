import React from "react";

/* I can also do the following:
    I can set the game to a string and do a turnary on a turnary meaning
     - if game === won ? <Happy /> : game === lost ? <Sad /> : null
*/

function Banner({ game, guesses, answer }) {
  let theme;

  {
    game
      ? (theme = (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guesses.length} guess{guesses.length > 1 && "es"}
              </strong>
              .
            </p>
          </div>
        ))
      : (theme = (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        ));
  }
  return <>{theme}</>;
}

export default Banner;
