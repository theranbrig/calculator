import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CalculatorButton = ({ buttonValue }) => {
	const { number, getValue } = useContext(NumberContext);
	return <button onClick={() => getValue(buttonValue)}>{buttonValue}</button>;
};

export default CalculatorButton;
