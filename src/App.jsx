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
		useState(false);

	//=================================================================

	const [
		isError,
		setIsError
	] =
		useState(false);

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

	const card =
		document.querySelector
			(".card");

	//=================================================================

	function showPreviousQuestion() {

		// card.classList.
		// 	remove("show");

		setIndex(index - 1);

	} // showPreviousQuestion()

	//=================================================================

	function showNextQuestion() {

		// card.classList.
		// 	remove("show");

		setIndex(index + 1);

	} // showNextQuestion()

	//=================================================================

	function flipCard() {

		card.classList.
			toggle("show");

	} // flipCard()

	//=================================================================

	function isPresent() {

		const isValuePresent =
			answer != "";

		if (!isValuePresent) {

			setIsError(true);

			const err =
				"Please answer the question.";

			throw new Error(err);

		} // if

		return true;

	} // value()

	//=================================================================

	function isCorrect() {

		const flashCardAnswer =
			flashcard.answer;

		const isAnswerCorrect =
			(answer === flashCardAnswer);

		let message = "";

		if (!isAnswerCorrect) {

			setIsError(true);

			message =
				"The answer is incorrect!";

			throw new Error(message);

		} // if

	} // isAnswerCorrect()

	//=================================================================

	function handleTextChange(event) {

		const value =
			event.target.value;

		setAnswer(value);

	} // handleTextChange()

	//=================================================================

	function isDataValid() {

		console.log(answer);

		// setAnswer(inputValue);

		const isAnswerPresent =
			isPresent();

		const isAnswerCorrect =
			isCorrect();

		const isValid =
			isAnswerPresent &&
			isAnswerCorrect;

		return isValid;

	} // isDataValid()

	//=================================================================


	function submitForm(event) {

		event.preventDefault();

		if (isDataValid()) {

			const msg =
				"The answer is correct.";

			setMessage(msg);

		} // if



	} // submitForm()

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
			>
			</Card>

			<Form
				answer={answer}
				message={message}
				isError={isError}
				submitForm={submitForm}
				onChange={handleTextChange}
			>
			</Form>

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
