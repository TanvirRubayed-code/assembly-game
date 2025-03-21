import "./App.css";
import Header from "./Header/Header";
import Status from "./Status/Status";
import Languages from "./Languages/Languages";
import WordList from "./WordList/WordList";
import Keyboard from "./Keyboard/Keyboard";
import { useState } from "react";
import { languages } from "./languages";
import { getRandomWord } from "./utils";
import Confetti from "react-confetti";

function App() {
  // static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // state values
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [words, setWords] = useState(() => getRandomWord());
  // const [isGameOver, setIsGameOver]=

  // derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !words.includes(letter)
  ).length;

  const isGameWon = words
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameLost || isGameWon;

  const lastGuess = guessedLetters[guessedLetters.length - 1];

  const isLastGuessIncorrect = lastGuess && !words.includes(lastGuess);

  function startNewGame() {
    setWords(getRandomWord());
    setGuessedLetters([]);
  }

  function addGuessedLetter(letter) {
    setGuessedLetters(
      (preLeter) =>
        preLeter.includes(letter) ? preLeter : [...preLeter, letter]
      //   {
      //     const lettersSet = new Set(preLeter);
      //     lettersSet.add(letter);
      //     return Array.from(lettersSet);
      //   }
    );
  }
  // console.log(guessedLetters);

  return (
    <main>
      {isGameWon && (
        <Confetti recycle={false} numberOfPieces={1000} width="5000%" />
      )}
      <Header />
      <Status
        isGameWon={isGameWon}
        isGameOver={isGameOver}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <WordList
        words={words}
        lastGuess={lastGuess}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        words={words}
        isGameOver={isGameOver}
        startNewGame={startNewGame}
      />
    </main>
  );
}

export default App;
