function Form(
	{
		answer,
		error: message,
		isError,
		submitForm,
		onChange }) {

	return (



		<form onSubmit={submitForm}>

			<div id="input-container">

				<input
					type="text"
					id="guess"
					name="guess"
					placeholder="Type your answer here"
					value={answer}
					onChange={onChange}
				>
				</input>
				<button
					type="submit"
					id="submit-btn"
				>Submit Answer
				</button>

			</div>

			{isError
				? <p className="error">{message}</p>
				: <p className="success">{message}</p>
			}


		</form>

	);

} // Form()

//===========================================================

export { Form };