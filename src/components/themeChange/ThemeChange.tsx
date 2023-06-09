import React, {useState, useEffect} from "react";

// Styles
import "./ThemeChange.css";

// Interface
import {ITheme} from "../../interfaces/ITheme";

function ThemeChange({setTheme, handleChange}: ITheme) {
	const [themeStorageValue, setThemeStorageValue] = useState(1);

	useEffect(() => {
		const theme = localStorage.getItem("themes");

		switch (theme) {
			case "theme-1":
				document.body.setAttribute("class", "theme-1");
				setThemeStorageValue(1);
				break;
			case "theme-2":
				document.body.setAttribute("class", "theme-2");
				setThemeStorageValue(2);
				break;
			case "theme-3":
				document.body.setAttribute("class", "theme-3");
				setThemeStorageValue(3);
				break;
		}
	}, [setTheme]);

	return (
		<nav className='theme-radio'>
			<div className='radio-values'>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</div>
			<input
				type='range'
				name='theme'
				id='theme-radio'
				max={3}
				min={1}
				value={themeStorageValue}
				onChange={e => handleChange(e, setTheme)}
			/>
		</nav>
	);
}

export default ThemeChange;
