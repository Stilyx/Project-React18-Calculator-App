import {ChangeEvent} from 'react';

const handleChange = (e: ChangeEvent<HTMLInputElement>, setTheme: (e: number) => void) => {
	document.body.setAttribute('class', `theme-${e.target.value}`);
	localStorage.setItem('themes', `${document.body.classList.value}`);
	setTheme(Number(e.target.value));
};

export default handleChange;
