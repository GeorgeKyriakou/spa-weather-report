import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import useFetchWeather from "../../hooks/useFetchWeather";
import { useDebounce } from "use-debounce";

interface Props {
	setWeather: (location: any) => void;
}
const SearchBar = ({ setWeather }: Props) => {
	const [inputValue, setInputValue] = useState("");
	const [weather, setLocation] = useFetchWeather();
	const [debouncedSearchTerm, _] = useDebounce(inputValue, 800);

	useEffect(() => {
		setWeather(weather);
	}, [weather]);

	useEffect(() => {
		if (setLocation) {
			setLocation(debouncedSearchTerm.trim());
		}
	}, [debouncedSearchTerm]);

	return (
		<>
			<input
				className="search"
				value={inputValue}
				placeholder="Search for a city in the world..."
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</>
	);
};
export default SearchBar;
