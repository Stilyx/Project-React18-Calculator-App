import {KeyboardEvent} from "react";

export interface ICalculatorInput {
	readonly numberOrOperator: string;
	handleAddNumber: (event: KeyboardEvent<HTMLInputElement>) => void;
}
