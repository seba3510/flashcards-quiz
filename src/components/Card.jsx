import { Question } from "./Question.jsx";

//========================================================

import { Answer } from "./Answer.jsx";

//========================================================

function Card(
	{
		question,
		answer,
		image,
		flip
	}
) {

	return (

		<div className="card" onClick={flip}>
			<Question
				question={question}
			/>

			<Answer
				answer={answer}
				image={image}
			/>

		</div>

	);

} // Card()

//=================================================================

export { Card };