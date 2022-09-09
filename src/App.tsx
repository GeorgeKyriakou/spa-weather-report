import React, { useState } from "react";

import "./App.css";
import SearchBar from "./components/BigSearch";
import { Weather } from "./models/Weaher";

const App = () => {
	const [weather, setWeather] = useState({} as Weather);

	return (
		<div className="App">
			<div className="header">
				<SearchBar setWeather={setWeather} />
			</div>
			<div>
				<pre>{JSON.stringify(weather)}</pre>
			</div>
		</div>
	);
};

export default App;
