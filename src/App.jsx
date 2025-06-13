import { useState } from "react";

//========================================================

import { quiz } from "./data/quiz.js";

//========================================================

import "./styles/style.css";

//========================================================

import { Question } from "./components/Question.jsx";

//========================================================

import { Answer } from "./components/Answer.jsx";

//========================================================

import leftArrow from "./assets/images/left-arrow.svg";

//========================================================

import rightArrow from "./assets/images/right-arrow.svg";

//========================================================

function App() {


  const [
    index,
    setIndex
  ] =
    useState(0);

  // quiz.sort();

  //=================================================================

  let curr =
    quiz[index];

  //=================================================================

  const numQuestions =
    quiz.length;

  let hasPrev =
    (index > 0);

  let hasNext =
    (index < numQuestions);

  //=================================================================

  function handlePrevClick() {

    hasPrev ? setIndex(index - 1)
      : null;

  } // handlePrevClick()

  //=================================================================

  function handleNextClick() {

    const randomIndex =
      getRandomIndex();

    setIndex(randomIndex);

  } // handleNextClick()

  //=================================================================

  function getRandomIndex() {

    const min = 0;

    const max =
      numQuestions - 1;

    const minCeiled =
      Math.ceil(min);

    const maxFloored =
      Math.floor(max);

    const randomIndex =
      Math.floor(
        Math.random() *
        (maxFloored - minCeiled + 1)
        + minCeiled
      );

    return randomIndex;

  } // getRandomIndex()

  //=================================================================

  function handleCardClick() {

    const card =
      document.querySelector
        (".card");

    card.classList
      .toggle("show");

  } // handleCardClick()

  return (

    <main>
      <h3>
        Question {index + 1} of {numQuestions}
      </h3>
      <div className="card" onClick={handleCardClick}>
        <Question question={curr.question}></Question>
        <Answer
          answer={curr.answer}
          image={curr.image}></Answer>
      </div>

      <div id="buttons">
        <button
          onClick={handlePrevClick}
          disabled={(!hasPrev)}
          className="prev-btn"
        >
          <img
            src={leftArrow}
            alt="This arrow points to the left."
          >
          </img>
        </button>

        <button
          onClick={handleNextClick}
          disabled={(!hasNext)}
          className="continue-btn"
        >
          <img
            src={rightArrow}
            alt="This arrow is pointing to the right."></img>
        </button>
      </div>
    </main>

  );
} // App()

export default App
