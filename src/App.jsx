import { useState } from "react";

//========================================================

import { quiz } from "./data/quiz.js";

//========================================================

import { Header } from "./components/Header.jsx";

//========================================================

import { Question } from "./components/Question.jsx";

//========================================================

import { Answer } from "./components/Answer.jsx";

//========================================================

import leftArrow from "./assets/images/left-arrow.svg";

//========================================================

import rightArrow from "./assets/images/right-arrow.svg";

//========================================================

import "./styles/style.css";

//========================================================

function App() {


  const [
    index,
    setIndex
  ] =
    useState(0);

  //=================================================================

  let curr =
    quiz[index];

  //=================================================================

  const numQuestions =
    quiz.length;

  let hasPrev =
    (index > 0);

  let hasNext =
    (index < numQuestions - 1);

  //=================================================================

  function handlePrevClick() {

    setIndex(index - 1);

  } // handlePrevClick()

  //=================================================================

  function handleNextClick() {

    setIndex(index + 1);

  } // handleNextClick()

  //=================================================================

  function handleCardClick() {

    const card =
      document.querySelector
        (".card");

    card.classList
      .toggle("show");

  } // handleCardClick()

  //=================================================================

  return (

    <>
      <main>
        <Header></Header>
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
            {hasPrev &&
              <img
                src={leftArrow}
                alt="This is an arrow that points to the left.">
              </img>
            }

          </button>

          <button
            onClick={handleNextClick}
            disabled={(!hasNext)}
            className="continue-btn"
          >
            {hasNext &&
              <img
                src={rightArrow}
                alt="This is an arrow that points to the right."
              >
              </img>
            }
          </button>
        </div>
      </main>

    </>

  );

} // App()

//=================================================================

export { App };
