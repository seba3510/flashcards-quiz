function Counter(
	{
		currentStreak,
		longestStreak
	}
) {

	return (

		<div id="counter">
			<div id="current-streak">
				<p>
					Current Streak: {currentStreak}
				</p>

			</div>

			<div id="longest-streak">
				<p>
					Longest Streak: {longestStreak}
				</p>
			</div>
		</div>
	);

} // Counter()

//=============================================================

export { Counter };