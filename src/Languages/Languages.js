import React from "react";
import "./Languages.css";
import { languages } from "../languages";
import clsx from "clsx";

const Languages = ({ wrongGuessCount }) => {
  return (
    <section className="language-chips">
      {languages.map((language, index) => {
        const isLost = index < wrongGuessCount;
        const className = clsx("chip", isLost && "lost");
        const styles = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };
        return (
          <span
            // className={`chip ${isLost ? "lost" : ""}`}
            className={className}
            key={language.name}
            style={styles}
          >
            {language.name}
          </span>
        );
      })}
    </section>
  );
};

export default Languages;
