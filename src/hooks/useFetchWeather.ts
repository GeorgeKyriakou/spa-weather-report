import React, { useEffect, useState } from "react";

const useFetchWeather = () => {
	const [weather, setWeather] = useState();
	const [location, setLocation] = useState("");

	useEffect(() => {
		location !== "" &&
			(async () => {
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4740214f5d459a0d89e0d9b725d2631f&units=metric`
				);
				const weather = await res.json();
				setWeather(weather);
			})();
	}, [location]);

	return [weather, setLocation];
};

export default useFetchWeather;
