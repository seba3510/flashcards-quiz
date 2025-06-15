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

import shuffleArrow from "./assets/images/shuffle-arrows.png";

//========================================================

import { Counter } from "./components/Counter.jsx";

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
		status,
		setStatus
	] =
		useState("");

	//=================================================================

	const [
		areShuffled,
		setAreShuffled
	] =
		useState(false);

	//=================================================================

	const [
		currentStreak,
		setCurrentStreak
	] =
		useState(0);

	//=================================================================

	const [
		longestStreak,
		setLongestStreak
	] =
		useState(0);

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

		setStatus("");

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

			setStatus("error");

			const error =
				"Please answer the question!";

			setMessage(error);

			return;

		} // if

		const areAnswersEqual =
			(answer === flashcard.answer);

		if (!areAnswersEqual) {

			setLongestStreak
				(currentStreak);

			setCurrentStreak
				(0);

			setStatus("error")

			const hint =
				`Hint: ${flashcard.hint}`;

			setMessage(hint);

		} // if

		else {

			setIsError(false);

			setStatus("success");

			const msg =
				"The answer is correct!";

			setMessage(msg);

			setAnswer("");

			const newStreak =
				currentStreak + 1;

			setCurrentStreak
				(newStreak);

			const isLongesStreakBeat =
				(newStreak > longestStreak);

			if (isLongesStreakBeat) {

				setLongestStreak
					(newStreak);

			} // if

		} // else

	} // submitForm()

	//=============================================================

	function showPreviousQuestion() {

		if (areShuffled) {

			setAreShuffled(false);

			setIndex(index - 1);

			setAnswer("");

		} //  if

		else {

			setAreShuffled(true);

			const randomIndex =
				getRandomIndex();

			setIndex(randomIndex);

			setAnswer("");

		} // else

	} // showPreviousQuestion()

	//=================================================================

	function showNextQuestion() {

		if (areShuffled) {

			setAreShuffled(false);

			setIndex(index + 1);

			setAnswer("");

		} // if

		else {

			const randomIndex =
				getRandomIndex();

			setIndex(randomIndex);

			setAnswer("");

		} // else

	} // showNextQuestion()

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

	function shuffleCards() {

		const randomIndex =
			getRandomIndex();

		setIndex(randomIndex);

		setAreShuffled(true);

	} // shuffleCards()

	//=================================================================

	return (

		<main>

			<Header></Header>

			<h3>
				Question {index + 1} of {numQuestions}
			</h3>

			<Counter
				currentStreak={currentStreak}
				longestStreak={longestStreak}
			/>

			<Card
				question={flashcard.question}
				answer={flashcard.answer}
				image={flashcard.image}
			/>

			<Form
				answer={answer}
				message={message}
				isError={isError}
				status={status}
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

				<button
					id="shuffle-cards-btn"
					onClick={shuffleCards}>
					<img
						src={shuffleArrow}
						alt="Shuffle Cards"
					/>
				</button>

			</div>

		</main>

	);

} // App()

//=================================================================

export { App };
