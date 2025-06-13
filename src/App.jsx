import { useState } from "react";

//========================================================

import { flashcards } from "./data/flaschards.js";

//========================================================

import { Header } from "./components/Header.jsx";

//========================================================

import { Question } from "./components/Question.jsx";

//========================================================

import { Answer } from "./components/Answer.jsx";

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

	let curr =
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

		card.classList.
			remove("show");

		setIndex(index - 1);

	} // showPreviousQuestion()

	//=================================================================

	function showNextQuestion() {

		card.classList
			.remove("show");

		setIndex(index + 1);

	} // showNextQuestion()

	//=================================================================

	function flipCard() {


		card.classList
			.toggle("show");

	} // flipCard()

	//=================================================================

	function submitForm(event) {

		event.preventDefault();

		const input =
			document.querySelector
				("input");

		const value =
			input.value;

		const selector =
			"form > p";

		const para =
			document.querySelector
				(selector);

		const isAnswerCorrect =
			(value === curr.answer);

		let message = "";

		if (!isAnswerCorrect) {

			input.classList.
				toggle("error");

			message =
				"The answer is wrong!";

			para.textContent =
				message;

		} // if

		else {

			message =
				"The answer is correct.";

			para.textContent =
				message;

		} // else



		// const value =
		// 	input.value;

		// const isAnswerCorrect =
		// 	(value === curr.answer);

		// const msg1 =
		// 	"The answer is correct.";

		// const msg2 =
		// 	"The answer is incorrect.";

		// isAnswerCorrect ? alert(msg1)
		// 	: alert(msg2);

	} // submitForm()

	//=================================================================

	return (

		<>
			<main>

				<Header></Header>

				<h3>
					Question {index + 1} of {numQuestions}
				</h3>

				<div className="card" onClick={flipCard}>
					<Question question={curr.question}></Question>
					<Answer
						answer={curr.answer}
						image={curr.image}></Answer>
				</div>

				<form onSubmit={submitForm}>
					<label for="guess">
						Guess the answer here:
					</label>
					<input type="text" id="guess" name="guess"></input>
					<button
						type="submit"
						id="submit-btn"
					>Submit Guess</button>

					<p></p>

				</form>

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

		</>

	);

} // App()

//=================================================================

export { App };
