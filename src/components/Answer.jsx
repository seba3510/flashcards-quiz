function Answer({ answer, image }) {

	return (

		<div className="card-back">
			<img
				src={image.path}
				alt={image.alt}>
			</img>
			<p>
				{answer}
			</p>
		</div>

	);

} // Answer()

//==============================================================

export { Answer };