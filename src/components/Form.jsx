import { useState } from "react";

//================================================================================

function Form({ flashcard }) {

	const [
		inputValue,
		setInputValue
	] =
		useState("");

	//================================================================================

	const input =
		document.querySelector
			("input");

	//================================================================================

	function validateForm(event) {

		event.preventDefault();

		const userAnswer =
			input.value.trim();

		setInputValue(userAnswer);

		const answer =
			flashcard.answer;

		const isAnswerCorrect =
			(inputValue === answer);

		const para =
			document.querySelector
				("#message");

		const card =
			document.querySelector
				(".card");

		let message = "";

		alert(inputValue);

		if (isAnswerCorrect) {

			message =
				"The answer is correct!"

			para.textContent =
				message;

			input.classList.
				toggle("success");

			para.classList.
				toggle("success");

			card.classList.
				toggle("show");

		} // if



	} // validateForm()

	//================================================================================



	return (

		<form onSubmit={validateForm}>

			<div id="input-container">

				<input
					type="text"
					id="guess"
					name="guess"
					placeholder="Type your answer here"
				>
				</input>
				<button
					type="submit"
					id="submit-btn"
				>Submit Answer
				</button>

			</div>

			<p id="message"></p>

		</form>

	);

} // Form()

//===========================================================

export { Form };