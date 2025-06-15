function Form(
	{
		answer,
		message,
		isError,
		submitForm,
		handleTextChange
	}) {

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

			<p className={(isError) ? "error"
				: (message === "The answer is correct!")
					? "success" : ""}>
				{message}
			</p>

		</form>

	);

} // Form()

//=============================================================

export { Form };