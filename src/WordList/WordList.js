import React, { useState } from "react";
import "./WordList.css";
import { languages } from "../languages";
import clsx from "clsx";

const WordList = ({ words, guessedLetters, lastGuess, isGameOver }) => {
  return (
    <>
      <section className="word">
        {words.split("").map((letter, index) => {
          const shouldRevealLetter =
            isGameOver || guessedLetters.includes(letter);
          const letterClass = clsx(
            isGameOver && !guessedLetters.includes(letter) && "missed-letter"
          );
          return (
            <span key={index} className={letterClass}>
              {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
          );
        })}
      </section>

      {/* combined visually-hidden aria-live region for status update */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {words.includes(lastGuess)
            ? `Correct! The letter ${lastGuess} is in the word.`
            : `Sorry, the letter ${lastGuess} is not in the word.`}
          You have {languages - 1} attempts left.
        </p>
        <p>
          Current word:{" "}
          {words
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
};

export default WordList;
