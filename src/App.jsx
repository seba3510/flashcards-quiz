/* eslint-disable no-unexpected-multiline */
import { useState } from "react";

//========================================================

import { flashcards } from "./data/flashcards.js";

//========================================================

import { Header } from "./components/Header.jsx";

//========================================================

import { Card } from "./components/Card.jsx";

//========================================================

import { Form } from "./components/Form.jsx";

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

	const [
		answer,
		setAnswer
	] =
		useState("");

	//=================================================================

	const [
		message,
		setMessage
	] =
		useState("");

	//=================================================================

	const [
		isError,
		setIsError
	] =
		useState(false);

	//=================================================================

	const [
		isFlipped,
		setIsFlipped
	] =
		useState(false);

	//=================================================================

	const para =
		document.querySelector
			("form > p");

	//=================================================================

	const input =
		document.querySelector
			("input");

	//=================================================================

	const card =
		document.querySelector
			(".card");

	//=================================================================

	let flashcard =
		flashcards[index];

	//=================================================================

	const numQuestions =
		flashcards.length;

	let hasPrev =
		(index > 0);

	let hasNext =
		(index < numQuestions - 1);

	//=================================================================

	function handleTextChange(event) {

		const value =
			event.target.value;

		setAnswer(value);

		setMessage("");

	} // handleTextChange()

	//=============================================================

	function submitForm(event) {

		event.preventDefault();

		const isAnswerPresent =
			(answer != "");

		if (!isAnswerPresent) {

			setIsError(true);

			input.classList.
				toggle("error");

			para.classList.toggle("error");

			const error =
				"Please answer the question!";

			setMessage(error);

			return;

		} // if

		const areAnswersEqual =
			(answer === flashcard.answer);

		if (!areAnswersEqual) {

			setIsError(true);

			const error =
				"The answer is wrong!";

			setMessage(error);

			para.textContent = "";

		} // if

		else {

			setIsError(false);

			const msg =
				"The answer is correct!";


			setMessage(msg);

			// card.classList.remove("show");

			card.classList.toggle("show");

		} // else

	} // submitForm()

	//=============================================================

	function showPreviousQuestion() {

		// card.classList.
		// 	remove("show");

		setIndex(index - 1);

	} // showPreviousQuestion()

	//=================================================================

	function showNextQuestion() {

		if (!isFlipped) {

			setIsError(true);

			const error =
				"Flip the card before moving on to " +
				"the next question.";

			para.classList.toggle("error");

			para.textContent =
				error;


		} // if

		// card.classList.
		// 	remove("show");

		// input.textContent = "";

		// setIndex(index + 1);

	} // showNextQuestion()

	//=================================================================

	function flipCard() {

		card.classList.
			toggle("show");

	} // flipCard()

	//=================================================================

	return (

		<main>

			<Header></Header>

			<h3>
				Question {index + 1} of {numQuestions}
			</h3>

			<Card
				question={flashcard.question}
				answer={flashcard.answer}
				image={flashcard.image}
				flip={flipCard}
			/>

			<Form
				answer={answer}
				message={message}
				isError={isError}
				submitForm={submitForm}
				handleTextChange={handleTextChange}
			/>

			<div id="buttons">
				<button
					onClick={showPreviousQuestion}
					disabled={(!hasPrev)}
					className="prev-btn"
				>
					{(hasPrev) &&
						<img
							src={leftArrow}
							alt="This is an arrow that points to the left.">
						</img>
					}
				</button>

				<button
					onClick={showNextQuestion}
					disabled={(!hasNext)}
					className="continue-btn"
				>
					{(hasNext) &&
						<img
							src={rightArrow}
							alt="This is an arrow that points to the right."
						>
						</img>
					}
				</button>

			</div>

		</main>

	);

} // App()

//=================================================================

export { App };
