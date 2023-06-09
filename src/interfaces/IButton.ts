import {MouseEvent} from 'react';

export interface IButtons {
	ButtonText: string;
	buttonClass: string;
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
