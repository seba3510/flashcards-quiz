import { useState } from "react";

import { App } from "../App";

//=============================================================

function Form({ flashcard }) {

	const [
		answer,
		setAnswer
	] =
		useState("");

	//=============================================================

	const [
		message,
		setMessage
	] =
		useState("");


	//=============================================================

	const [
		isError,
		setIsError
	] =
		useState(false);

	//=============================================================

	const para =
		document.querySelector
			("form p");

	//=============================================================

	const input =
		document.querySelector
			("input");

	//=============================================================

	const card =
		document.querySelector
			(".card");

	//=============================================================

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

			input.classList.toggle("success");

			card.classList.toggle("show");

			setMessage(msg);

			para.textContent = "";

		} // else


	} // submitForm()

	//=============================================================

	return (

		<form onSubmit={submitForm}>
			<div id="input-container">
				<input
					type="text"
					placeholder="Type your answer here"
					value={answer}
					onChange={handleTextChange}
				/>
				<button
					type="submit"
					id="submit-btn"
				>
					Submit Answer
				</button>
			</div>
			{(isError) ?
				<p className="error">{message}</p>
				:
				<p className="success">{message}</p>}
		</form>
	);
} // Form()

//=============================================================

export { Form };