import React from 'react';

// Hooks

// Styles

import './Header.css';

// interface
import {IHeader} from '../../interfaces/IHeader';

function Header({children}: IHeader): JSX.Element {
	return (
		<header className='header'>
			<p className='logo'>calc</p>
			<nav className='theme-options'>
				<p>THEME</p>
				{children}
			</nav>
		</header>
	);
}

export default Header;
