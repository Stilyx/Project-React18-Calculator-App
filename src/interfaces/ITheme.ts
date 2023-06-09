import {ChangeEvent} from 'react';

export interface ITheme {
	setTheme: number;
	handleChange: (e: ChangeEvent<HTMLInputElement>, setTheme: number) => void;
}
