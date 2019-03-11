import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CalculatorButton = ({ buttonValue }) => {
	const { number, getValue } = useContext(NumberContext);
	return (
		<div className="button-div">
			<button onClick={() => getValue(buttonValue)}>{buttonValue}</button>
		</div>
	);
};

export default CalculatorButton;
