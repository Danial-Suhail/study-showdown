import "./App.css";
import { Container } from "./components/Container";
function App() {
	

	return (
		<Container.Outer>
			<Container.Inner>

				<h2>
					An engaging way to study! Try your best to get the highest score on the leaderboards!
				</h2>

				<button
					className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
				>
					Start Game
				</button>

				<p className="">
					Visit studyshowdown.com to see the leaderboard!
				</p>
			</Container.Inner>
		</Container.Outer>
	);
}

export default App;
