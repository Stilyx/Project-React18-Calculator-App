import React, {useState, KeyboardEvent, MouseEvent, useEffect} from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import InputCalculator from './components/inputCalculator/InputCalculator';
import Button from './components/button/Button';

// Utils
import includesOperator from './utils/IncludesInOperator';
import ThemeChange from './components/themeChange/ThemeChange';
import handleChange from './utils/HandleChangeTheme';

function App() {
	const [theme, setTheme] = useState<number>(1);
	const [numberOrOperator, setNumberOrOperator] = useState<string>('');
	const [operatorValue, setOperatorValue] = useState<string>('');
	const operators = ['+', '-', 'x', '/'];
	const isOperatorIncludes = includesOperator(operators, numberOrOperator);

	useEffect(() => {
		if (numberOrOperator === 'Infinity') setNumberOrOperator('0');
	}, [numberOrOperator]);

	const handleAddNumber = (e: KeyboardEvent<HTMLInputElement>): void => {
		const inputRegex = /[0-9]/;
		const isNumber = inputRegex.test(e.key);
		const isOperator = operators.includes(e.key) && !isOperatorIncludes;
		const isLastIndexPoint = numberOrOperator.slice(-1) !== '.' && e.key === '.';

		if (e.key === 'Enter') calculateNumbers(operatorValue);
		if (e.key === 'Backspace') deleteLastNumber();
		if (isNumber) setNumberOrOperator(numberOrOperator + e.key);
		if (isLastIndexPoint) setNumberOrOperator(numberOrOperator + e.key);

		if (isOperator) {
			setNumberOrOperator(numberOrOperator + e.key);
			setOperatorValue(e.key);
		}
	};

	const inserOperatorToCalculate = (e: MouseEvent<HTMLButtonElement>): void => {
		const isOperator = operators.includes(e.currentTarget.value) && !isOperatorIncludes;
		const isKeyPoint = e.currentTarget.value === '.' && numberOrOperator.slice(-1) !== '.';

		if (isOperator) {
			setNumberOrOperator(numberOrOperator + e.currentTarget.value);
			setOperatorValue(e.currentTarget.value);
		}

		if (isKeyPoint) setNumberOrOperator(numberOrOperator + e.currentTarget.value);
	};

	const calculateNumbers = (e: string) => {
		const [prev, future] = numberOrOperator.split(e);
		const prevValueToCalculate = Number(prev);
		const futureValueToCalculate = Number(future);
		const prevHasValue = !prevValueToCalculate && prevValueToCalculate !== 0;
		const futureHasValue = !futureValueToCalculate && futureValueToCalculate !== 0;

		if (prevHasValue) return;
		if (futureHasValue) return;

		switch (operatorValue) {
			case '+':
				setNumberOrOperator(String(prevValueToCalculate + futureValueToCalculate));
				break;
			case '-':
				setNumberOrOperator(String(prevValueToCalculate - futureValueToCalculate));
				break;
			case 'x':
				setNumberOrOperator(String(prevValueToCalculate * futureValueToCalculate));
				break;
			case '/':
				setNumberOrOperator(String(prevValueToCalculate / futureValueToCalculate));
				break;
		}
	};

	const deleteLastNumber = () => setNumberOrOperator(numberOrOperator.slice(0, -1));
	const resetCalulator = () => setNumberOrOperator('');

	return (
		<div className='container'>
			<Header>
				<ThemeChange handleChange={e => handleChange(e, setTheme)} setTheme={theme} />
			</Header>
			<main className='main'>
				<InputCalculator
					numberOrOperator={numberOrOperator}
					handleAddNumber={e => handleAddNumber(e)}
				/>

				<div className='calculator-container'>
					<Button
						buttonClass='number-button'
						ButtonText='1'
						handleClick={() => setNumberOrOperator(numberOrOperator + '1')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='2'
						handleClick={() => setNumberOrOperator(numberOrOperator + '2')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='3'
						handleClick={() => setNumberOrOperator(numberOrOperator + '3')}
					/>
					<Button
						buttonClass='delete-button'
						ButtonText='DEL'
						handleClick={e => deleteLastNumber()}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='4'
						handleClick={() => setNumberOrOperator(numberOrOperator + '4')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='5'
						handleClick={() => setNumberOrOperator(numberOrOperator + '5')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='6'
						handleClick={() => setNumberOrOperator(numberOrOperator + '6')}
					/>
					<Button
						buttonClass='operator-button'
						ButtonText='+'
						handleClick={e => inserOperatorToCalculate(e)}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='7'
						handleClick={() => setNumberOrOperator(numberOrOperator + '7')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='8'
						handleClick={() => setNumberOrOperator(numberOrOperator + '8')}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='9'
						handleClick={() => setNumberOrOperator(numberOrOperator + '9')}
					/>
					<Button
						buttonClass='operator-button'
						ButtonText='-'
						handleClick={e => inserOperatorToCalculate(e)}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='.'
						handleClick={e => inserOperatorToCalculate(e)}
					/>
					<Button
						buttonClass='number-button'
						ButtonText='0'
						handleClick={() => setNumberOrOperator(numberOrOperator + '0')}
					/>
					<Button
						buttonClass='operator-button'
						ButtonText='/'
						handleClick={e => inserOperatorToCalculate(e)}
					/>
					<Button
						buttonClass='operator-button'
						ButtonText='x'
						handleClick={e => inserOperatorToCalculate(e)}
					/>
					<Button
						buttonClass='delete-button reset'
						ButtonText='RESET'
						handleClick={e => resetCalulator()}
					/>
					<Button
						buttonClass='equal-button'
						ButtonText='='
						handleClick={e => calculateNumbers(operatorValue)}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
