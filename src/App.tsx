import React, { useState } from "react";

import "./App.css";
import SearchBar from "./components/BigSearch";
import MainView from "./components/MainView";
import { Weather } from "./models/Weaher";

const App = () => {
	const [weather, setWeather] = useState<Weather | null>(null);

	return (
		<div className="App">
			<div className="header">
				<SearchBar setWeather={setWeather} />
			</div>
			{weather && (
				<div>
					{weather?.message ? (
						<p>{weather.message}</p>
					) : (
						<MainView weather={weather} />
					)}
				</div>
			)}
		</div>
	);
};

export default App;
