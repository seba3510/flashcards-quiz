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
				question={question}></Question>
			<Answer
				answer={answer}
				image={image}
			>
			</Answer>

		</div>

	);

} // Card()

//=================================================================

export { Card };