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
					className={(isError) ? "error"
						: answer ? "success" : ""}
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