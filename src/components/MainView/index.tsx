import React from "react";
import { Weather } from "@/models/Weaher";
import "./style.css";

interface Props {
	weather: Weather;
}

const MainView: React.FC<Props> = ({ weather }: Props) => {
	const formatTime = (timestamp: number): string => {
		const date = new Date(timestamp * weather.timezone);
		return `${date.getHours()}:${date.getMinutes()}`;
	};

	return (
		<div className="main-wrapper">
			<div id="description">
				<h1>
					{weather.weather[0].description} in {weather.name}
				</h1>
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt=""
				/>
			</div>
			<div className="info-box">
				<ul>
					<li>
						<span>Temperature</span>
						<div></div>
						<span>{Math.floor(weather.main.temp)}&#8451;</span>
					</li>
					<li>
						<span>Feels like</span>
						<div></div>
						<span>
							{Math.floor(weather.main.feels_like)}
							&#8451;
						</span>
					</li>
					<li>
						<span>Humidity</span>
						<div></div>
						<span>{Math.floor(weather.main.humidity)}%</span>
					</li>
					<li>
						<span>Min</span>
						<div></div>
						<span>{Math.floor(weather.main.temp_min)}%</span>
					</li>
					<li>
						<span>Max</span>
						<div></div>
						<span>{Math.floor(weather.main.temp_max)}%</span>
					</li>
					<div className="sun">
						<div>
							<img src="/sunrise.png" id="sunrise" alt="sunrise" />
							<label htmlFor="sunrise">{formatTime(weather.sys.sunrise)}</label>
						</div>
						<div>
							<img src="/sunset.png" id="sunset" alt="sunset" />
							<label htmlFor="sunset">{formatTime(weather.sys.sunset)}</label>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default MainView;
