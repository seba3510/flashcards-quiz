import { quiz } from "../data/flaschards.js";


//========================================================

function Header() {

	const numQuestions =
		quiz.length;

	return (

		<>
			<header>
				<h1>The Ultimate Cobra Kai Quiz!</h1>
				<h2>How much of a Cobra Kai fan are you? Test all your knowledge here!</h2>
				<p>Number of cards: {numQuestions}</p>
			</header >
		</>

	);

} // Header()

//========================================================

export { Header };