import React from "react";

// Styles
import "./InputCalculator.css";

// Interfaces
import {ICalculatorInput} from "../../interfaces/ICalculatorInput";

function InputCalculator({handleAddNumber, numberOrOperator}: ICalculatorInput) {
	return (
		<div className='inputContainer'>
			<input
				type='text'
				name='calculator'
				id='calculator'
				value={numberOrOperator}
				autoComplete='off'
				onKeyDown={event => handleAddNumber(event)}
				className={numberOrOperator.length >= 13 ? "smallText" : ""}
			/>
		</div>
	);
}

export default InputCalculator;
