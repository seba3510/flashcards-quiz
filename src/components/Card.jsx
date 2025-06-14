import { Question } from "./Question.jsx";

//========================================================

import { Answer } from "./Answer.jsx";

//========================================================

function Card(
	{
		question,
		answer,
		image,
	}
) {

	return (

		<div className="card">
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