import "./Keyboard.css";
import clsx from "clsx";

const Keyboard = ({
  alphabet,
  guessedLetters,
  addGuessedLetter,
  words,
  isGameOver,
  startNewGame,
}) => {
  return (
    <>
      <section className="keyboard">
        {alphabet.split("").map((char) => {
          const isGuessed = guessedLetters.includes(char);
          const isCorrect = isGuessed && words.includes(char);
          const isWrong = isGuessed && !words.includes(char);
          const className = clsx({
            correct: isCorrect,
            wrong: isWrong,
          });

          return (
            <button
              className={className}
              onClick={() => addGuessedLetter(char)}
              disabled={isGameOver}
              aria-disabled={guessedLetters.includes(char)}
              aria-label={`Letter ${char}`}
              key={char}
            >
              {char.toUpperCase()}
            </button>
          );
        })}
      </section>
      {isGameOver && (
        <button className="reset-btn" onClick={startNewGame}>
          New Game
        </button>
      )}
    </>
  );
};

export default Keyboard;
