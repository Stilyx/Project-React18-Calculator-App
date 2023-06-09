const includesOperator = (operators: string[], numberOrOperator: string) => {
	return operators.some(operator => numberOrOperator.split('').includes(operator));
};

export default includesOperator;
